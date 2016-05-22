var app = angular.module('app', ['ui', 'ui.router']);

app.config(function ($stateProvider) {
    
    
    
    $stateProvider.state('step-1', {
        url: '/step-1',
        templateUrl: '../app/templates/boarding/step-1.html'
    });
    
    $stateProvider.state('step-2', {
        url: '/step-2',
        templateUrl: '../app/templates/boarding/step-2.html'
    });
    
    $stateProvider.state('step-3', {
        url: '/step-3',
        templateUrl: '../app/templates/boarding/step-3.html'
    });

    $stateProvider.state('chapter-1', {
        url: '/chapter-1',
        templateUrl: '../app/templates/chapter/chapter-1.html'
    });
});

app.controller('AppController', ['$scope', function ($scope) {

}]);