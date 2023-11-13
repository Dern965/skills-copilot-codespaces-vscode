// Create web server
// This file contains the code to handle the post request from the client
// and update the comments.json file

// import express module
var express = require('express');
// import fs module
var fs = require('fs');
// import body-parser module
var bodyParser = require('body-parser');
// create express app
var app = express();
// create application/x-www-form-urlencoded parser
var urlencodedParser = bodyParser.urlencoded({ extended: false });

// create server
var server = app.listen(8081, function () {
  var host = server.address().address;
  var port = server.address().port;
});

// handle post request from client
app.post('/process_post', urlencodedParser, function (req, res) {
  // prepare output in JSON format
  response = {
    name: req.body.name,
    comment: req.body.comment,
    date: req.body.date
  };
  // read comments.json file
  fs.readFile('./comments.json', 'utf8', function readFileCallback(err, data) {
    if (err) {
      console.log(err);
    } else {
      // convert json file to javascript object
      obj = JSON.parse(data);
      // add new comment to object
      obj.push(response);
      // convert object to json file
      json = JSON.stringify(obj);
      // write json file back to comments.json
      fs.writeFile('./comments.json', json, 'utf8', function(err) {
        if (err) {
          console.log(err);
        }
      });
    }
  });
  // send response to client
  res.end(JSON.stringify(response));
});