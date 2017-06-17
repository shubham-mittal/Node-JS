const express = require('express');

var app = express();

app.get('/', (req,res) => {
  res.status(404).send('Hello World!');
});

app.get('/users', (req,res) =>{
  res.send([{
    name:"Shubham",
    age:19
    },{
    name:"Yash",
    age:18
  }]);
});

app.listen(3010);

module.exports.app = app;
