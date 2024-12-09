const db = require("../db/dbConfig");


const getAll = async () => {
    try {
        // .any returns an array of objects (rows of data)
        const people = await db.any("SELECT * FROM people");
        return people
    } catch (error) {
        return error;
    }
}

const getOne = async (personId) => {
    try {
        const person = await db.one("SELECT * FROM people WHERE id=$1", personId)
        // .one() only returns an obj
        // if none or more rows return, the promise is rejected
        return person;
    } catch (error) {
        return error;
    }
}

const createOne = async () => {
    try {
        //INSERT INTO 
        const newPerson = await db.one("INSERT INTO people (name, age, gender, city, isActive) VALUES ($1, $2, $3, $4, $5)" , [name, age, gender, city, isActive])
        return newPerson;
    } catch (error) {
        return error;
    };
};


const updateOne = async(id, person) =>{
    try {
        const {name, age, gender, city, isActive} = body;
        const updatePerson = await db.one("UPDATE people SET name=$1, age=$2, gender=$3, city=$4, isActive=$5 WHERE id=$6 RETURNING *",[name, age, gender, city, isActive,id]);
        return updatePerson;
    } catch (error) {
        return error;
    }
}

const deleteOne = async (personId) => {
    try {
        const deletedPerson = await db.one("DELETE FROM people WHERE id=$1 RETURNING *", personId);
        return deletedPerson;
    } catch (error) {
        return error;
    };
};

module.exports = {
    getAll,
    getOne,
    createOne,
    updateOne,
    deleteOne
}