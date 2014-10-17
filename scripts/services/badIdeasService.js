//here we define our service on for our application.
//we use factory here because it's the most common and we should use it when we can. 
//a factory returns an object that has methods we can use on it.
angular.module('livecodeApp')
  .factory('badIdeasService', function($http, $q){
    //why type things twice? 
    //now you can use a variable!!!!!!!
    var base_url = "http://localhost:3000/api/badideas/v1";
  return{
    getBadIdeas: function(){
      return $http.get(base_url);
    },
    saveNewIdea: function(idea){
      var deferred = $q.defer();
      $http.post(base_url, idea).then(function(data){
        //process the data.
        deferred.resolve(data.data);
      })
      return deferred.promise;
    },
    updateIdea: function(idea){
      //we are going to pass in a single object. 
      //we're going to use the ID object. 
      return $http.put(base_url, idea);
    },
    deleteIdea: function(idea){
      //we're going to pass in a single idea and use it's idea to delete it. =)
      //we're going to pass in the ID to be deleted instead of the object.
      return $http.delete(base_url + "/" + idea.id, idea);
    }
  }
})