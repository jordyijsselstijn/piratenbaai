var app = angular.module('app', ['ui','ui.router']);
    app.config(function($stateProvider){

        $stateProvider.state('intro', {
            url : '/intro',
            templateUrl : 'public/js/app/templates/intro.html'
        });

    });
    app.controller('AppController', ['$scope', function($scope){



    }]);