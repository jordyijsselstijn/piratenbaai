/** @global socket, angular */

angular.module('app')
    .controller('ChapterController', ['$scope', '$state', 'socket', 'ngAudio', '$rootScope', function($scope, $state, socket, ngAudio, $rootScope){

        var chapters = [
            {   index: "Hoofdstuk 1",
                title: "Geen reis zonder voedsel",
                background : "/app/img/background/Chapter_1.jpg",
                destination : "Amsterdam"},
            {   index: "Hoofdstuk 2",
                title: "Dekselse Portugesen",
                background : "/app/img/background/Chapter_2.jpg",
                destination : "Bahia"},
            {   index: "Hoofdstuk 3",
                title: "Hereniging",
                background : "/app/img/background/Chapter_3.jpg",
                destination : "Bahia"},
            {   index: "Hoofdstuk 4",
                title: "Batavia en de Zilvervloot",
                background : "/app/img/background/Chapter_4.jpg",
                destination : "Batavia"},
            {   index: "Hoofdstuk 5",
                title: "De laatste rustplaats",
                background : "/app/img/background/Chapter_5.jpg",
                destination : "Celebes"}
        ];

        $rootScope.$on('$stateChangeSuccess', function(){

        });
        (function($state,$scope){
            var chapter = $('.chapter');
            switch($state.current.name){
                case 'chapter-1' :  $scope.currentChapter = chapters[0];
                                    chapter.attr('style', 'background: url('+$scope.currentChapter.background+') center/cover;');
                                    break;
                case 'chapter-2' :  $scope.currentChapter = chapters[1];
                                    chapter.attr('style', 'background: url('+$scope.currentChapter.background+') center/cover;');
                                    break;
                case 'chapter-3' :  $scope.currentChapter = chapters[2];
                                    chapter.attr('style', 'background: url('+$scope.currentChapter.background+') center/cover;');
                                    break;
                case 'chapter-4' :  $scope.currentChapter = chapters[3];
                                    chapter.attr('style', 'background: url('+$scope.currentChapter.background+') center/cover;');
                                    break;
                case 'chapter-5' :  $scope.currentChapter = chapters[4];
                                    chapter.attr('style', 'background: url('+$scope.currentChapter.background+') center/cover;');
                                    break;
            }
        })($state,$scope);
    }]);
