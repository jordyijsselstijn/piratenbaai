angular.module('app')
    .service('PirateService', ['$http', function($http){

        var getPirateName = function(name){

            return $http.get('../start/pirate_name?name='+name);

        };

        return {

            getPirateName : function(name){
                return getPirateName(name)
            }


        }



    }]);