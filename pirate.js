var pirate = (function(window){

    var socket = io();

    return {
        registeredEvents : {},
        listen : function(){
            window.addEventListener('deviceorientation', function(event){

                var max = 80;
                var min = -80;
                var ammount = '';

                if(event.beta >= 0){
                    ammount = (event.beta / max) * 100;
                    socket.emit('backward', Math.round(ammount) );
                    pirate.emit('backward', Math.round(ammount) );
                }else{
                    ammount = (event.beta / min) * 100;
                    socket.emit('forward', Math.round(ammount) );
                    pirate.emit('forward', Math.round(ammount) );
                }
                if(event.gamma >= 0){
                    ammount = (event.gamma / max) * 100;
                    socket.emit('right', Math.round(ammount) );
                    pirate.emit('right', Math.round(ammount) );
                }else{
                    ammount = (event.gamma / min) * 100;
                    socket.emit('left', Math.round(ammount) );
                    pirate.emit('left', Math.round(ammount) );
                }
            });
        },
        on : function(eventName, fn){
            this.registeredEvents[eventName] = this.registeredEvents[eventName] || [];
            this.registeredEvents[eventName].push(fn);
        },
        off: function(eventName, fn){
            if (this.registeredEvents[eventName]) {
                for (var i = 0; i < this.registeredEvents[eventName].length; i++) {
                    if (this.registeredEvents[eventName][i] === fn) {
                        this.registeredEvents[eventName].splice(i, 1);
                        break;
                    }
                }
            }
        },
        emit : function(eventName, data){
            if (this.registeredEvents[eventName]) {
                this.registeredEvents[eventName].forEach(function(fn) {
                    fn(data);
                });
            }
        }

    }

})(window);