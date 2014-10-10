// I like to group ctrls next to templates in "feature folders".
// Easier for me to find. Feel free to do the same. 
// Or you can group them by function aka "controllers", "templates"

angular.module('livecodeApp').controller('pageoneCtrl', function($scope, $location){
//angular.module('appName') is how we start all angular pieces. Remmber this.
//we use .controller to define a controller. 
//we use .factory for a factory, .service for a service etc.

//then we give it two parameters. 
//1. the name of our controller.
//2. we give it a function that holds our code.
// that function from step 2. takes parameters of other services/ctrls/files we want to use in our controller.
// in CTLR's you usually want a $scope.
//this is common function($scope, serviceName, otherServiceName)
  $scope.proof = "I told you guys this would work.";


//$ in angular means it's built in angular magic. 
//$location is therefore an angular service we can use.
//$location is angulars built in service for handling manual route changes.
  $scope.toPageTwo = function(){
    //we required $location above when we defined the controller.
    //$location.path() will return the current path/hash you're on.
    //$location.path('/newroute') will navigate to that new route.
    $location.path('/pagetwo');
  }



})