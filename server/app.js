var mongoose = require('mongoose');
var express = require('express');
var bodyParser = require('body-parser');

var app = express();

app.use(bodyParser.json());

//model
var Student = require('../models/assignments.js');

var mongoURI = "mongodb://localhost:27017/assignments";
// var MongoDB = mongoose.connect(mongoURI).connection;
mongoose.connect(mongoURI);
// MongoDB.on('error', function (err) {
//     console.log('mongodb connection error:', err);
// });
//
// MongoDB.once('open', function () {
//   console.log('mongodb connection open!');
// });

app.listen('9001', function(){
  console.log("I'm listening on port 9001");
});//end server spinup


app.get('/test', function(req,res){

  var gary = new Student({
    student_name: "Gary",
    assignment_number: 3243,
    score: 100,
    date_completed: 534897
  });//end gary

  gary.save(function(err){
    if(err){
      console.log('error occurred:', err);
      res.sendStatus(500);
    }//end if
    else{
      res.sendStatus(201);
    }//end else
  });//end gary save
});//end test

app.get('/all', function(req,res){
  Student.find({}, function(err, studentResults) {
      if(err){
        console.log('error occurred:', err);
        res.sendStatus(500);
      }//end if
      else{
        console.log('student Results',studentResults);
        res.send(studentResults);
      }//end else
    });//end function
});//end all




//
// app.post('', function(){
//
// });
