angular.module('app')
    .controller('AdminController', ['$scope', 'socket', function($scope, socket){

        //Let the user advance to the next chapter.
        $scope.doNextChapter = function(){
            socket.emit('complete_chapter');
        };

        //Do a pirate raid and steal gold from the user.
        $scope.doPirateRaid = function(){
            var hitPoints = $scope.hitPoints | 0;
            socket.emit('pirate_raid', hitPoints);
        };

        //Invert controls due to drunken state. Expires after some time.

        $scope.doDrunkenMode = function(){
            var time = convertToMilliseconds($scope.drunkenTime) | convertToMilliseconds(3);   //time in milliseconds.
            socket.emit('drunk_af', time);
        };
        var convertToMilliseconds = function(time){
            return time * 1000;
        };

    }]);