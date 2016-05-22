angular.module('app')
    .controller('AppController', ['$scope', '$state', 'socket', function ($scope, $state, socket) {

            //Stub to fill with pirate data later.
            $scope.pirate = {};

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