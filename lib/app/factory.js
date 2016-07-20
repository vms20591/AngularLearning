(function(){
    var app=angular.module('angularFactory',[]);

    app.factory('homeFactory',function(){
        var sayHelloName=function(name){
            return "Hello "+name;
        };

        return {
            sayHelloName:sayHelloName
        };
    });
})();
