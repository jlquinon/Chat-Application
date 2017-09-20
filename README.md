# Chat-Application
Two-way chat communication using WebSockets

## Foreword
This application was built on a Windows 10 64-bit system. I have not tried the application on any other operating system. Please follow the guidelines to ensure proper functionality.

## Usage
You will first need to download [Node.JS](https://nodejs.org/en/download/) to ensure the application will work on a personal machine.

Once Node.JS has been installed, the socketchat package is required for handling two way communication, such as authenticating and storing socket information, and can be downloaded on the command line using
```
npm install socketchat
```

The package is included in the project by preceding the Javascript server file with
```
var socketchatlib = require('socketchat');
```
**Note:** the use of the socketchatlib variable was based on personal preference and can be changed to anything that better suits your project.

Through the command line, navigate to the Server.js file directory and run it via Node prior to launching index.html
```
node Server.js
```

To communicate back and forth with another instance of the project, launch the index.html file twice. Login credentials are as listed below:
*user1: pass1
*user2: pass2
*user3: pass3
