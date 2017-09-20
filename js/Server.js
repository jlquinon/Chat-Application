//include package sochaketchat in project
var socketchatlib = require('socketchat');

//"username":"password" combinations
var users = {
    "user1" : "pass1",
    "user2" : "pass2",
    "user3" : "pass3"   
};

//authentication function
var auth = function(username, password){
    return !!(username && password && users[username] === password);
}

//pass socket number and authentication function to library instance
var socketchat = new socketchatlib(8080, auth);

//start listening in port
socketchat.listen();

//this event will fire once a successful listen has happened
socketchat.on('listen',function(message){
  console.log(message);
});

//this event will fire whenever a user attempts to authenticate
socketchat.on('authentication',function(origin,stat){
  console.log(origin+": "+JSON.stringify(stat));
});

//this event fires whenever a user sends a message
socketchat.on('message',function(message){
  console.log("Message: "+JSON.stringify(message));
});

//this event fires when there is an error in the connection
socketchat.on('error',function(err){
  console.log("Error: "+err);
});