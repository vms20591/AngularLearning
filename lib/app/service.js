(function(){
    var app=angular.module('angularService',[]);

    function homeService(){
        this.sayHelloName=function(name){
            return "Hello "+name;
        };
    }

    app.service('homeService',homeService);
})();
