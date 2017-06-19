'use strict';

const express = require('express');
const app = express();

app.get('/zero', function(req, res) {
  res.send("0");
})

app.listen(3000, function(){
  console.log("Server is running on port 3000!")
})
