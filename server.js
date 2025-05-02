/* *********************** This is the application server file. ***********************/

/* import express package */
const express = require('express');

/* Creat the "app" Triggers the express constructor so that the app is now an object with all the functionality of express. */
const app = express();

/* Default GET route... app.get() is an [express handler]. Meaning is uses express to watch for a GET request.
    The "/" indicates the route. A route is the path that the URL takes to get to the resource. In this case, the root of the server - so nothing follows the "/".
    The , seperates the route from the function that is responsible for delviering a response to the request.
    (req, res) => { ... } an anonymous function that takes the [request] and [response] objects as parameters.
    res. send("Welcome home!") is a method of the [response] object that sends a message back to the browser. It's not a web page, just a message string. */
app.get("/", (req, res) => {res.send("Welcome home!")});


/* Server host name and port */
const HOST = 'localhost';
const PORT = 3000;

/* Log statement to confirm server operation */
app.listen(PORT, () => {
    console.log(
        `trial app listening on ${HOST}:${PORT}`)
});