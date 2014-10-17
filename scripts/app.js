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
      controller: 'pagetwoCtrl',
      resolve: {

                data: function($timeout, $q){

                        var deferred = $q.defer();

                        $timeout(function(){
                          deferred.resolve("Jake was Here");
                        }, 5000);

                        return deferred.promise;
        }
      }
    })
    .when('/badideas', {
      templateUrl: '/scripts/badideas/badIdeas.html',
      controller: 'badIdeasCtrl'
    })
}])

//resolve will prevent the template and the controller in the route from being shown until it gets the data it wants.
//generally used for $http requests to get dynamic data from the web.
//here we are creating a promise, to slow our resolve down by 5 seconds.
//resolve will not display the template/ctrl until the object gets it's data.
//In this example. until key "data" get's it's value, pagetwo will not be shown.
//when it does get it's value, "data" is accessible in the controller if we require it by name in the controller definition
//angular.module('appname').controller('controllername', function($scope, data){
  //alert(data) <-- we can use data now!
// })