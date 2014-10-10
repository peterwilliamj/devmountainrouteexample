//here we name our app "livecodeApp";
//Second param, in the Array is other angular modules we want to use.
var app = angular.module('livecodeApp', ['ngRoute']);
//if you have other modules load them in the index (After angular)
//then you can include them here.
//var app = angular.module('livecodeApp', ['ngRoute', 'ngAnimate', 'ngCookies'])


//we configure our app here. 
//we call app.config and tell it we want to configure the $routeProvider
//$routeProvider is a built in angular service. =)

app.config(['$routeProvider', function($routeProvider){
  //first parameter of the .when method is the hash (route) you want to configure.
  //second parameter is an object that uses templateUrl (where to find your html)
  //and the controller: the name of the ctrl we're going to use for this template.
  $routeProvider
    .when('/pageone', {
      templateUrl: './scripts/pageone/pageone.html',
      controller: 'pageoneCtrl'
    })
    .when('/pagetwo', {
      templateUrl: './scripts/pagetwo/pagetwo.html',
      controller: 'pagetwoCtrl'
    })
}])