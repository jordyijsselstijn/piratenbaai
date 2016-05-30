var pirate = (function(window){

    return {
        registeredEvents : {},
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