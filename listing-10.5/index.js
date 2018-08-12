"use strict";

const express = require('express');
const path = require('path');
const importCsvFile = require('./toolkit/importCsvFile.js');

const app = express();

const staticFilesPath = path.join(__dirname, "public");
const staticFilesMiddleWare = express.static(staticFilesPath);
app.use("/", staticFilesMiddleWare);

app.get("/rest/data", (request, response) => {

    importCsvFile("./data/data.csv")
        .then(data => {
            response.json(data);
        })
        .catch(err => {
            console.error(err);

            response.sendStatus(500);
        });
});

app.listen(3000, () => {
    console.log("Web server listening on port 3000!");
});
