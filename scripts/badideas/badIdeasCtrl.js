angular.module('livecodeApp').controller('badIdeasCtrl', function($scope, badIdeasService){

  //please declare all variables in js not just in your html.

  //this is a method that will kick off everything in our contorller to initialize it. 
  init();
  
  //this is that function.
  function init(){
    $scope.newIdea = {};
    //we use a boolean to switch from create to edit view.
    $scope.update = false;
    getIdeas();
  }

  //this method uses our badIdeas service to go get the ideas.
  function getIdeas(){
    badIdeasService.getBadIdeas().then(function(data){
      $scope.ideas = data.data;
    })
  }

  //this is a method on the scope to refresh our ideas list on demand.
  $scope.refreshIdeas = function(){
    getIdeas();
  }

  //we save the new idea then refresh the idea list.
  $scope.postNewIdea = function(){
    badIdeasService.saveNewIdea($scope.newIdea).then(function(data){
      getIdeas();
    })
  }

  //this will make the request to update our object on the server.
  //then refresh the ideas. =)
  $scope.updateIdea = function(){
    badIdeasService.updateIdea($scope.ideaToEdit).then(function(data){
      getIdeas();

      //reset the view back to create ideas. 
      $scope.update = false;
      $scope.newIdea = {};
    })
  }

  //this is our method to bring up the editor.
  $scope.editIdea = function(){
    $scope.update = true;
    $scope.buttonText = "Update Idea";
    $scope.ideaToEdit = this.idea;
  }

  //this is going to be our method to delete an idea.
  $scope.deleteIdea = function(){
    badIdeasService.deleteIdea(this.idea).then(function(data){
      getIdeas();
    })
  }

})