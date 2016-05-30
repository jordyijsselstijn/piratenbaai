angular.module('app')
    .directive('rotation', ['$state', function($state){
       return{
            restrict : 'C',
            link : function(s,e,a){

                console.log("Rotation directive loaded");

                window.addEventListener("orientationchange", function() {
                    if(window.innerHeight > window.innerWidth){
                        $state.go('rotate');
                    }
                    if(window.innerHeight < window.innerWidth){
                        window.history.back();
                    }
                });
            }
       }
    }]);