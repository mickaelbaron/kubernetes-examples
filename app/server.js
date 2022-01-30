const express = require("express");
const os = require("os")
const fs = require("fs")

const app = express();

app.get('/*', (req, res) => {
    let string = "Host " + os.hostname();

    let path = req.path !== '/' ? req.path : "";
    let envValue = process.env.CONTEXT ? process.env.CONTEXT : "";

    let result = 'Hello World from: ' + string + path + " " + envValue;

    console.log(result);
    res.send(result);
});

const server = app.listen(7000, () => {
    console.log(`Express running → PORT ${server.address().port}`);
});