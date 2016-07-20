(function(){
    var app=angular.module('angularProvider',[]);

    app.provider('home',function(){
        this.config={};

        this.$get=function(){
            var that=this;
            var sayHelloName=function(name){
                return that.config.specialName+' '+name;
            };

            return {
                sayHelloName:sayHelloName    
            };
        };
    });
})();
