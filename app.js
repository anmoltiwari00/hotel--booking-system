// Setting up the dependencies
var express = require('express');
var app = express();
var mongoose = require('mongoose');
var bodyParser = require('body-parser');

var index = require('./routes/homeRoute');
var hotel = require('./routes/hotelRoutes');
var user = require('./routes/userRoutes');

//Connecting to the database
mongoose.connect('mongodb://localhost:27017/booking-system')
  .then(() => console.log(`Connected to database.`))
  .catch(err => console.log(`${err}.`));

//Configurations
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json()); 

app.use('/', index);
app.use('/api', hotel);
app.use('/api', user);

//listening on port
var port = process.env.PORT || 3000;
app.listen(port);
console.log(`Running on port ${port}.`);  
