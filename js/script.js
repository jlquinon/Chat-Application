var ws;
function init() {
  ws = new WebSocket("ws://localhost:8080/");
  // event handlers
  ws.onopen = function() {
    output("Successful connection");
  };

  ws.onmessage = function(msg) {
    var json=JSON.parse(msg.data);  // msg.data contains the received string
    console.log(json);
    if(json.type==='authentication'&&json.status==='success')
    {
      document.getElementById("login").style.display = "none";
      document.getElementById("message").style.display = "block";
    }
    else if(json.type==='authentication'&&json.status==='fail'){
      output("Login Failed");
    }
    else if(json.type==='message'){
      output("Message from " + json.from+" : "+json.message); 
    }
  };

  ws.onclose = function() {
    output("Closed connection");
  };

  ws.onerror = function() {
    output("Connection error");
  };
}

// function for login passed to websocket
function login() {
  var username = document.getElementById("username");
  var password = document.getElementById("password");
  var data={type:'authenticate'};
  data.username=username.value;
  data.password=password.value;
  ws.send(JSON.stringify(data));
}

// function fired when submit button is clicked
function onSubmit() {
  var input = document.getElementById("input");
  var to = document.getElementById("to");
  var data={type:'message'};
  data.message=input.value;
  data.to=to.value;
  // send messages to websocket if message is not empty
  if(input.value.length>0){
    ws.send(JSON.stringify(data));
    output("Send to "+to.value+" : "+input.value);
    input.value = ""; // empty input value attribute after sending msg
    //input.focus();
  }
}

// function fired when close button is clicked to close connection
function onCloseClick() {
  ws.close();
}

// function for formatting output
// includes the output parameter and date 
function output(str) {
  var log = document.getElementById("log");
  log.innerHTML = "<strong>"+str + "</strong><br>"+new Date()+"<br><br>" + log.innerHTML;
}