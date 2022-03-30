//web hello world that echos url parameters
//
const http = require('http');
var url = require('url');
//  require('dotenv').config();
// :wqrequire('Math');


const express = require('express')
var app = express()
var xxx = 'Hello World!  <p> pants <p> pants <p> pants <p> <b>' + Math.random();

        + process.env.TESTIT;
app.get('/', (req, res) => {
 res.send(xxx)

  })


app.listen(8080, () => {
  console.log(`Example app listening on port 3000!`)
  console.log(xxx)
})
module.exports = app;

