var app = angular.module('app', ['ui', 'ui.router', 'ngAudio']);

app.config(['$stateProvider',  function ($stateProvider) {

    $stateProvider.state('start', {
        url: '/start',
        templateUrl: '../app/templates/start/information.html'
    });

    $stateProvider.state('welcome', {
        url: '/welcome',
        templateUrl: '../app/templates/start/welcome.html'
    });
    
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

    $stateProvider.state('chapter-2', {
        url: '/chapter-2',
        templateUrl: '../app/templates/chapter/chapter-1.html'
    });

    $stateProvider.state('chapter-3', {
        url: '/chapter-3',
        templateUrl: '../app/templates/chapter/chapter-1.html'
    });

    $stateProvider.state('chapter-4', {
        url: '/chapter-4',
        templateUrl: '../app/templates/chapter/chapter-1.html'
    });

    $stateProvider.state('chapter-5', {
        url: '/chapter-5',
        templateUrl: '../app/templates/chapter/chapter-1.html'
    });

    $stateProvider.state('admin', {
        url: '/admin',
        templateUrl: '../app/templates/admin/admin-panel.html'
    });

    $stateProvider.state('rotate', {
        url: '/rotate',
        templateUrl: '../app/templates/other/rotate-screen.html'
    });
}]);