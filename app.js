const express = require("express");
const app = express();
const pplController = require('./controllers/people')

app.use(express.json()); //

//any function with acess to the request and response object is called middleware 
app.get('/', (request, respond) => {
    respond.send('PEOPLE')
})

app.use("/people", pplController)

//our routes are set up to listen to requests to their specific url/path


//your server must be running in order to make a request 


module.exports = app