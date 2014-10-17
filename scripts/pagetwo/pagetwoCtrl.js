angular.module('livecodeApp').controller('pagetwoCtrl', function($scope, $location, $timeout, $q, data){
  // define all your variables at the top of your controller.
  $scope.pageTwoProof = "Good Work";
  $scope.showingText = false;

  $scope.toPageOne = function(){
    $location.path('/pageone')
  }

  $scope.showText = function(){
    getText().then(function(data){
      $scope.showingText = data;
    });
  }

  $scope.text2 = "test text or something";

  function getText(){
    //$q is angulars promise library.
    //you must include that at the top when you define your controller.
    //$q.defer will create a "defer" object which has a .promise property which is a promise;
    var deffered = $q.defer();
    //this creates a deferred object with a promise on it.
    //essentially creating a promise;

    $timeout(function(){
      //this is how we send data back to whoever requested it from us.
      //they already have our promise so they know it's going to come.
      //but we have to resolve this, to actually send the data back to them.
      deffered.resolve(true);
    }, 5000);

    //down here we immediatly return the promise back to whoever called us.
    return deffered.promise;
  }

 alert(data);

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