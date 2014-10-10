angular.module('livecodeApp').controller('pagetwoCtrl', function($scope, $location){
  $scope.pageTwoProof = "Good Work";

  $scope.toPageOne = function(){
    $location.path('/pageone')
  }

})


//five steps to add a route. 
//1. Configure the route in app.js
//  a) give it a hash/route.
//  b) give it a path to template
//  c) give it a controller name
//2. Create that template;
//3. Create that controller;
//4. Setup the controller. See Above.
//5. Include that new controller .js file in the index.html.