angular.module('app')
    .controller('AppController', ['$scope', '$state', 'socket', '$rootScope', 'PirateService', function ($scope, $state, socket, $rootScope ,PirateService) {

            //Stub to fill with pirate data later.
            $scope.pirate = {
                firstName : null,
                lastName : null
            };

            $scope.start = function(){

                if($scope.pirate.firstName != null || true){
                    PirateService.getPirateName($scope.pirate.firstName).then(function(data){
                        $scope.pirate.lastName = data.data.lastName;
                    });

                    $state.go('welcome');
                }

            };

            $rootScope.$on('$stateChangeStart', function(event, toState, toParams, fromState, fromParams){

                //if pirate is not yet set, make sure routes to the chapter section are blocked.

            });

            $scope.beginPirateLife = function(){
                $state.go('step-1');
                socket.emit('player_ready', $scope.pirate);
            };

            //Switch chapters when completed.
            socket.on('complete_chapter', function(data){

                switch($state.current.name){
                    case 'chapter-1' :  $state.go('chapter-2');
                        break;
                    case 'chapter-2' :  $state.go('chapter-3');
                        break;
                    case 'chapter-3' :  $state.go('chapter-4');
                        break;
                    case 'chapter-4' :  $state.go('chapter-5');
                        break;
                    default :   $state.go('chapter-1');
                        break;
                }

            });

            (function(){
                setInterval(function(){
                    $.get('/session/global', function(data){
                        window.PIRATE_SESSION_ID = data;

                    }, function(){

                        if(window.PIRATE_SESSION_ID != data ){

                            pirate.emit('connection_lost');

                        }
                    });
                },2000);
            })();


            pirate.on('connection_lost', function(){

                //Check if modal is better when connection is lost.
                $state.go('start');
            });


}]);