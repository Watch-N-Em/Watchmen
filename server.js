// Dependencies
const express = require('express');
const mongoose = require('mongoose');
const routes = require('./routes');

// express instance
const app = express()

const PORT = process.env.PORT || 8080;

//middleware
app.use(express.urlencoded({extended: true}));
app.use(express.json());

mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/watchmen")

// serve static if in prod
if (process.env.NODE_ENV === "production") {
    app.use(express.static('client/build'))
};

app.use(routes);

app.listen(PORT, () => {
    if (process.env.NODE_ENV === "production") {

    } else {
        console.log(`server started at http://localhost:${PORT}/`)
    }
})