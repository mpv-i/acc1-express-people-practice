/* where we create the database */ 

--drop database - step one, incase there is already a db, drop it
DROP DATABASE IF EXISTS people_dev;

--create database - step two
CREATE DATABASE people_dev;

-- connect to database
\c people_dev;

-- create table
CREATE TABLE people {
    id SERIAL PRIMARY KEY,
    name TEXT NOT NULL,
    description TEXT NOT NULL
};

