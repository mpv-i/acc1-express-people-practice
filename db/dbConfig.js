const pgp = require("pg-promise")();
require("dotenv").config();
const {PG_HOST, PG_USER, PG_PORT, PG_DATABASE} = process.env;

const connection = {
    host: PG_HOST,
    user: PG_USER,
    port: PG_PORT,
    database: PG_DATABASE
}

// connection obj connects our server to the database so that it can request 
//and receive the data the client is requesting

const db = pgp(connection);

module.exports = db;