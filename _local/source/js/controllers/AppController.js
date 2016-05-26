angular.module('app')
    .controller('AppController', ['$scope', '$state', 'socket', 'PirateService', function ($scope, $state, socket, PirateService) {

            //Stub to fill with pirate data later.
            $scope.pirate = {
                firstName : null,
                lastName : null
            };

            $scope.start = function(){

                PirateService.getPirateName($scope.pirate.firstName).then(function(data){
                    $scope.pirate.lastName = data.data.lastName;
                });

                $state.go('welcome');

            };

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

}]);