//we require packages using the require('packageName') syntax.
//that loads the package into memory so node can use it. 

var express = require('express');
//require express bodyParser seperatly.
var bodyParser = require('body-parser');

//here we create an express app by calling express();
var app = express();
//use body-parser here.
//in the latest verisons of bodyParser we need to declare which parsing syntax it's looking for.
app.use(bodyParser.json());
//this is code to configure our express application.

//configures the application.
  //bodyParse is built in express middleware that will make your life better.
  //it parses the body and creates a json Object so you don't have to. 
  //thanks bodyParser!
  // app.use(express.bodyParser());
  //here we define our to handle CORS related security issues.
app.use(function(req, res, next) {
  //this method is allowing requests to come from any location on the web.
  //in production you probably want to limit that to your domain.
  res.header('Access-Control-Allow-Origin', '*');
  //Here we define the methods we're willing to accept.
  res.header('Access-Control-Allow-Methods', 'OPTIONS, GET, POST, DELETE, PUT');
  //just use this one.
  res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
  next();
});

//you should use a persistant database in real life. 
//for now we're going to hold everything in memory.
//we're going to generate an "ID" for our new objects by using the timestamp at the time it was created.
//we can do that by using new Date().getTime();
var badIdeas = [
  {
    id: new Date().getTime(),
    submitter: 'Jake Lingwall',
    title: 'Facebook for Cats',
    description: 'This would be an app for my cats to FINALLY be able to social network.'
  }
];

app.get('/api/badideas/v1', function(req, res){
  res.send(badIdeas);
});

app.post('/api/badideas/v1', function(req, res){
  var newIdea = req.body;
  newIdea.id = new Date().getTime();
  badIdeas.push(req.body);
  res.send(200);
});

app.put('/api/badideas/v1', function(req, res){
  //here we going to loop through badIdeas to find the right object to update.
  for(var i in badIdeas){
    //if the ID's match it's the right object.
    //once again need to type match first. 
    //too lazy right now to do that.
    if(badIdeas[i].id == req.body.id){
      //so we update that here!
      badIdeas[i] = req.body;
    }
  }
  res.send(200);
});

app.delete('/api/badideas/v1/:id', function(req, res){
  for(var i in badIdeas){
    //if the ID's match it's the right object.
    //there is some funky type conversion here.
    //handle this better. 
    if(badIdeas[i].id == req.params.id){
      //so we update that here!
      //remove the idea from the array. =)
      badIdeas.splice(i, 1);
      console.log(badIdeas);
    }
  }
  res.send(200);
});



//here we define a "GET" method at the route "/api/code"
//we then give it a callback function with the parameters of request, and response.
//those are both objects we access here to see all sorts of good information.
app.get('/api/code/:userinfo', function(req, res){
  //here we respond with our answer by using the response objects, send method;
 
  //real life example follows:
  //validate whether they have access to this endpoint.
  //connect to the database
  //run a query.
  //get the data we want.
  //return that in the res.send(data) method;

  //when we pass in the route we can use the : (colon)variableName sytanx.
  ///api/code/:userinfo <--- this creates a variable in the url.
  //we can access that to return the right data.
  //req.params.variableName <--- is how we pull that info from the URL to use in our API.
  // res.send(req.params.userinfo);
  res.send("this is our response from the server");
});

app.post('/api/code/:userinfo', function(req, res){
  //you can access the payload body by going req.body.key <-- if you have bodyParser installed correctly.
  //this can be tricky to do in front of everyone, off the top of your head.
  //no matter how brilliant you are. 
  // req.body.name;
  res.send(req.body);
});

app.put('/api/code/:userinfo', function(req, res){

});

app.delete('/api/code/:userinfo', function(req, res){

});

//Here we tell the application to "listen" on a specific port. 
//in this case, port 3000. 
//you can use port 1337 if you want to be leet.
app.listen(3000);