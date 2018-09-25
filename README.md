## Section 1: Overview of Project
The project is designed with two-layered architecture: mid-tier and back-end. The mid-tier is built with Restify built on top of NodeJS. This project exposes three end-points described below:
- Get all users: a HTTP GET response to all that is stored in the database.
- Put a user: a HTTP PUT response to update a user
- Delete a User: a HTTP DELETE response
- POST a user: a HTTP POST response to save user

## Section 2: Technology stack
* Restify.js and NodeJS
  - Since the response is jSON, a javascript based middle-tier would work nicely--it breaks down boundaries betweeen front-end and back-end.
  - The calls are asynchronous, so running and debugging would work without much difficulties.
* MySQL
  - This POC is for Sequalize so MySQL is used
* NPM
  - Easy answer to a package managing solution associated with Node.
  - Some really great command-line tools

## Section 3: Run the app
### Extract package.json
This would include a simple command-line function to extract all the details. Assuming the pointer is to the project folder, run:
```npm install```
This would create a new folder called `node_modules` in the project directory.
### Run the application
Assuming you are in the project folder, run `app.js` using the following command:
```nodemon```

## Section 4: Notes
### Sequelize
First parameter will define the table name in singular if table name is not explicitly defined in third parameter's property
timestamps is set to false so that added On and updated On values are not automatically passed to the database when using CRUD operations
```
    const Users = sequelize.define('users', {
        ID: { type: Sequelize.INTEGER, allowNull: false, primaryKey: true, autoIncrement: true},
        LastName: {type: Sequelize.STRING, allowNull: false},
        FirstName: {type: Sequelize.STRING}
    }, { tableName: 'Users', timestamps: false });
```
### Restify
Restify is used as middleware. The POC does need to be extended to other features like Sorting etc.
