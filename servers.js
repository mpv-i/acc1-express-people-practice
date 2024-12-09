const express = require("express");
const app = require('./app');
require("dotenv").config() // configuration

const PORT = process.env.PORT

//any function with acess to the request and response object is called middleware 


app.listen(PORT, ()=>{console.log('server ready')}) // listens to request at a specific port