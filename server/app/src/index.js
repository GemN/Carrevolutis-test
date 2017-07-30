/**
 * Created by gem on 30/07/2017.
 */
"use strict";

let express = require('express');
let app = express();

let FindPrime = require("./controllers/FindPrime");

app.get('/next-prime', FindPrime.get);

app.listen(1515, () => {
    console.log("Express server listening on 1515");
});