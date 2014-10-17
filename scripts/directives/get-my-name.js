angular.module('livecodeApp').directive('getMyName', function(){
  return{
    restrict: 'E',
    templateUrl: '/scripts/directives/get-my-name.html',
    // you can pass in as many items as you need. =)
    //for example, pass a pizza, and a slice


    //when you pass in a value to your isolate scope.
    //if you use '=' you are passing it by reference.
    //that means if you change it on your directive
    //you will change it on your ctrl.
    //if you change it in your controller you change it in your directive.

    //if you use "@" you are passing it a value. 
    //not a reference. Just a value. Meaning your directive cannot update your controller.
    //they are seperate.

    scope: {name: "@", nickName: "="},
    //these should be in order!!!!!!!!!11!1!!!ii!!!
    link: function($scope, $element, $attrs){
      //empty
    }
  }
})