angular.module('app')
    .directive('control', ['socket',function(socket){
        return {
            restrict : 'A',
            link : function(s,e,a){

                window.addEventListener('deviceorientation', function(event){


                    var max = 80;
                    var min = -80;
                    var ammount = '';

                    if(event.beta >= 0){
                        ammount = Math.round((event.beta / max) * 100);
                        socket.emit('backward', ammount);
                        //console.log(ammount);

                    }else{
                        ammount = Math.round((event.beta / min) * 100);
                        socket.emit('forward', ammount );
                        //console.log(ammount);

                    }
                    if(event.gamma >= 0){
                        ammount = Math.round((event.gamma / max) * 100);
                        socket.emit('right', ammount );
                        //console.log(ammount);

                    }else{
                        ammount = Math.round((event.gamma / min) * 100);
                        socket.emit('left', ammount );
                        //console.log(ammount);

                    }
                });

            }

        }

    }]);