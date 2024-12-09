-- step 1 - connect to database
\c people_dev;

-- step 2 - add values into table (add all the data in ppl obj)
INSERT INTO people (name, age, gender, city, isActive) VALUES 
('John Doe', 30, 'Male', 'New York', true )