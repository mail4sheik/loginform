///<reference path="../typings/tsd.d.ts" />
namespace app.kickstarter {
  console.log("in app kickstarter");
    angular.module("loginapp",["ui.router"]).config(["$stateProvider", "$urlRouterProvider", function ($stateProvider:angular.ui.IStateProvider, $urlRouterProvider:angular.ui.IUrlRouterProvider) {
    
    $stateProvider
    .state('home',{
      url:"",
      templateUrl:"app/login/login.html"
      
    });
     console.log("state provider initialized");
    
  }]);
/*  angular.module("loginapp").run(["$state",function($state:angular.ui.IStateService){
    // $state.go('home');
    console.log("state. go executed");
    
  }]);*/


}