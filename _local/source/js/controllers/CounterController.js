angular.module('app')
    .controller('CounterController', ['$scope', '$state', 'socket', 'ngAudio', '$rootScope', function ($scope, $state, socket, ngAudio, $rootScope) {
        (function($state,$scope){
            $scope.count = 5;
            var $counter = document.getElementById('counter');
           var countInterval = setInterval(function(){
               $scope.count--;
               if($scope.count == 0){
                   clearInterval(countInterval);
                   $state.go('chapter-1');
               } else {
                   $counter.innerHTML = $scope.count;
               }
           }.bind(this), 1000);
        })($state,$scope);
    }]);