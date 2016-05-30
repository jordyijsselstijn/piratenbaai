angular.module('app')
    .service('PirateService', ['$http', function($http){

        var getPirateName = function(name){
            return $http.get('../start/pirate_name?name='+name);
        };

        var checkSession = function(){
            return $http.get('../session/pirate').then(function(data){
                return data;
            });
        };

        return {

            getPirateName : function(name){
                return getPirateName(name)
            },
            checkSession : function(){
                return checkSession();
            }
        }
    }]);