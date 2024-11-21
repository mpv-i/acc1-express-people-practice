const express = require("express");
const people = express.Router(); 
// express.Router alloes us to have almost a mini-app for one resource in one place, 
//instead of having them all in the same place

const peopleArr = require('../data/people')

//get ALL people : "/people"
people.get("/", (request, response) => {
    response.status(200).json(peopleArr);
})

//get ONE person: "/people/:id"
//:id is a parameter in our path
people.get("/:id", (request, response)=> {
    //use request.params to access path parameter
    //whatever you name your path parameters, 
    //that is going to be the key in your request.params object
    console.log(request.params)
    try {
    // const id = request.params.id 
    const {id} = request.params // since request.params is an obj, we can destructure the id
    const person = peopleArr.find((person)=> person.id === Number(id))
    //using .find to find the element that matches the id from our request 
    if (person){
        response.status(200).json(person)
    } else {
        throw "person not found"
    } 
        }  catch (error) {
        response.status(404).json({error:error})
    }
})


// Create one person(adding a person): "/people"
people.post("/", (request, response)=> {
    try {

        const newPerson = request.body 
        newPerson.id = peopleArr.length + 1 
        if (newPerson.name && newPerson.description){
            // if data exits, add person to array and send back successful response
            peopleArr.push(newPerson)
            response.status(201).json(peopleArr[peopleArr.length])
        } else {
            throw "could not add this person" 
        } 

    } catch (error){
        response.status(400).json({error : error })
    }
})
// update one person: "/people/:id"
people.put("/:id", (request, respond) =>{
    try {
        const {id} = request.params
        const person = request.body 
        const index = peopleArr.findIndex((person) => Number(id)===person.id) //using id to find index
        if (index !== -1){
            peopleArr.splice(index, 1, person); // replace person with updated person obj
            response.status(201).jason(peopleArr)
        } else {
            throw "could not uupdate person" // if no person found, triggers an error
        }
    } catch (error) {
        response.status(400).json((error))
    }
})

//delete ONE person: "/peple/:id"
people.delete("/:id", (request, response)=> {
    try {
        const {id} = request.params
        const index = peopleArr.findIndex((person)=> person.id === Number(id)) 
        //findIndex returns the index or -1
        if (index !== -1){
            // if index is found 
            peopleArr.splice(index, 1); // removes the person 
            response.status(200).json(peopleArr);
        } else {
            // otherwise trigger an error
            throw "could not find person"
        }

    } catch (error){
        response.status(404).json({error});
    }
});

module.exports = people