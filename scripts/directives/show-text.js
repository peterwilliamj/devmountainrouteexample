//I like to snake case directives for easy naming convention.
//easier to tell what a file is just by looking at it's name.
//directives you plan to use throughout the application should go in a common folder.
//so don't put them with different features.
angular.module('livecodeApp').directive('showText', function(){
  //no $scopes for directives required up top. 
  //we return a directive object.
  return{
    //restrict A is for attributes.
    //that looks like this: <div show-text></div>
    //restrict E is for Elements
    //that looks like this: <show-text></show-text>
    //this will make more sense soon.
    //when we define a directive in javascript we use camelCase
    //when we use a directive in html we use snake-case.
    //this is because html likes snake-case and javascript likes camelCase.
    //showText in js = show-text in HTML
    restrict: 'AE',
    template: '<div>This text is showing!</div>',
    //where magic happens. In case you were wondering.
    link: function($scope, $element, $attrs){
      //the scope here is a reference to the parent objects $scope.
      //meaning it will have the same scope as the ctrl that holds this directive.

      //element is an angular element where this directive as defined.
      //in this case it's on page one. and looks like this:
      //<div show-text></div>

      //$attrs is a map/object/hashMap of the attributes on that element.
      //this is used a little less than the others.
      //but we can find things like if there are other restrict 'A' directives on this directive.

      //we can define whatever want here. =)
      //$scope.clicked = function(){

      // }

    }


  }
})