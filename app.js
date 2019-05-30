// Our imported libraries
const express = require('express');
const path = require('path');


// Assigning Express to an app constant
const app = express();
// Creating our first route which is looking for requests from http://localhost:4000/
//OUR routes 
const routes = require('./routes.js');
app.use('/', routes);

// Our Views
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'pug');

// Starting our server on port 4000

const port = (process.env.PORT || 4000);
app.listen(port, () => console.log(`Listening on ${port}`));