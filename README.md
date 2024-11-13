## Express Server - People

Create a CRUD express server using the people array below:

```javascript
const people = [
    {
        id: 1,
        name: "John Doe",
        age: 30,
        gender: "Male",
        city: "New York",
        isActive: true,
    },
    {
        id: 2,
        name: "Jane Smith",
        age: 25,
        gender: "Female",
        city: "Los Angeles",
        isActive: true,
    },
    {
        id: 3,
        name: "Michael Johnson",
        age: 40,
        gender: "Male",
        city: "Chicago",
        isActive: false,
    },
    {
        id: 4,
        name: "Emily Davis",
        age: 35,
        gender: "Female",
        city: "San Francisco",
        isActive: true
    }
];
```

## Getting Started.

- Fork this repo
- `git clone` the forked repository
- `cd` to the directory where you cloned it
- `touch app.js`
- `npm init`
  - follow the prompts and confirm settings (this is just practice so it's ok to not provide much information/make a mistake/keep it simple)


Create a `.gitignore` file and add the following:

```
node_modules
.env
```

**make sure not to stage or push your work before adding the `.gitignore` file**

Relevant folders:
- data
- controllers

Relevant files:
- people.js (in data)
- people.js (in controllers)
- app.js
- server.js

### In app.js: 
- configure your app variable with express
- create the route for people that connects app.js to the routes in your controller


### In server.js:
- set up your server to listen for request at port 3000

### In controllers.js 
- Index
    - create a route that gets all of the people data using the array 