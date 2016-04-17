/**
 * Created by Juan on 15/4/16.
 */

var express = require("express");
var methodOverride  = require("method-override");
var mongoose = require('mongoose');
var bodyParser=require('body-parser');
var app = express ();

require('mongoose-middleware').initialize(mongoose);
mongoose.connect('mongodb://localhost/minimos', function(err, res) {
    if(err) throw err;
    console.log('Conectados con éxito a la Base de Datos');
});

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(methodOverride());


app.use(express.static(__dirname + "/public"));

//Routes
var router = express.Router();
routes = require('./routes/students')(app);
routes = require('./routes/subjects')(app);


var server = require('http').Server(app);

// Start server
server.listen(3000, function() {
    console.log("Node server running on http://localhost:3000");
});
