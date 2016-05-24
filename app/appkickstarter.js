///<reference path="../typings/tsd.d.ts" />
var app;
(function (app) {
    var kickstarter;
    (function (kickstarter) {
        console.log("in app kickstarter");
        angular.module("loginapp", ["ui.router"]).config(["$stateProvider", "$urlRouterProvider", function ($stateProvider, $urlRouterProvider) {
                $stateProvider
                    .state('home', {
                    url: "",
                    templateUrl: "app/login/login.html"
                });
                console.log("state provider initialized");
            }]);
    })(kickstarter = app.kickstarter || (app.kickstarter = {}));
})(app || (app = {}));
