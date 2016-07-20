(function(){
    var app=angular.module('angularApp',['angularConstant','angularProvider','angularController','angularDirective']);

    app.config(function(homeProvider,specialName){
        homeProvider.config.specialName=specialName;
    });
})();
