//web hello world that echos url parameters
const http = require('http');
var url = require('url');


const express = require('express')
var app = express()
 
app.get('/', (req, res) => {
 res.send('Hello World!  <p> pants <p> pants <p> pants')
 
  })
 

app.listen(8080, () => {
  console.log(`Example app listening on port 3000!`)
})
module.exports = app;
