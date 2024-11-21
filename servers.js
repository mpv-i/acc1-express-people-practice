const express = require("express");
const app = require('./app');

//any function with acess to the request and response object is called middleware 


app.listen(3333, ()=>{console.log('server ready')}) // listens to request at a specific port