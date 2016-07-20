(function(){
    var app=angular.module('angularDirective',[]);

    app.directive('userinfo',function(){
        var directive={};

        directive.restrict='E';
        directive.template="<div style='color:#8BB726;'>This is the User</div>";

        return directive;
    });
})();
