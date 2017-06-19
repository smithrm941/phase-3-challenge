'use strict';

const express = require('express');
const app = express();

app.get('/zero', function(req, res) {
  res.send("0");
})

app.get('/add', function(req, res) {
  let sum = parseInt(req.query.a) + parseInt(req.query.b);
  res.send("a + b = " + sum);
});

app.get('/double/:number', function(req, res) {
  let number = req.params.number;
  res.send(number + " times 2 is " + number*2);
})

app.listen(3000, function(){
  console.log("Server is running on port 3000!")
})
