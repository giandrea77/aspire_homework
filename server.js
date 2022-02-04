'use strict'

var express = require('express'),
    app = express();

// ** Config section 
var serverConfig = require('./config/serverConfig').get(process.env.NODE_ENV);

// ** Application close
process.on('SIGINT', function() {
    console.log('Terminated :)');
    process.exit(0);
});

// ** Route section
app.get('/', (req, res) => {
    res.send('Welcome to aspire_homework');
})

app.post('/generateUpdateStatement', (req, res) => {
    console.log(req.body)
    res.send(response)
});

// ** Listner ** 
app.listen(serverConfig.port);

console.log("########################################################################");
console.log('RESTful API server started on: ' + serverConfig.port);
console.log("########################################################################");