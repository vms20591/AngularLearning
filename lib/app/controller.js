(function(){
    var app=angular.module('angularController',['angularService','angularFactory','angularProvider','angularValue']);

    app.controller('homeController',function($scope,homeService,homeFactory,home,specialValue){
        console.log("homeService Says-> "+homeService.sayHelloName('vms'+' '+specialValue));
        console.log("homeFactory Says-> "+homeFactory.sayHelloName('aldo'+' '+specialValue));
        console.log("homeProvider Says-> "+home.sayHelloName('sundaram'+' '+specialValue));
    });
})();
