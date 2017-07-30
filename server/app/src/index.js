/**
 * Created by gem on 30/07/2017.
 */
"use strict";

let express = require('express');
let app = express();

let FindPrime = require("./controllers/FindPrime");

app.use((req, res, next) => {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Methods", "GET, PUT, POST, DELETE, OPTIONS, PATCH");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept, Authorization");
    res.setHeader('Content-Type', 'text/plain');
    next();
});

app.get('/next-prime', FindPrime.get);

app.listen(1515, () => {
    console.log("Express server listening on 1515");
});