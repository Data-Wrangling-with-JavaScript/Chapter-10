"use strict";

const express = require('express');
const path = require('path');
const dataForge = require('data-forge');

const app = express();

const staticFilesPath = path.join(__dirname, "public");
const staticFilesMiddleware = express.static(staticFilesPath);
app.use('/', staticFilesMiddleware);

app.get('/rest/data', (request, response) => {

    Promise.all([
            dataForge.readFile("./data/nyc-weather.csv").parseCSV(),
            dataForge.readFile("./data/nyc-umbrella-sales.csv").parseCSV()
        ])
        .then(results => {
            const weatherData = results[0]
                .parseInts(["Year", "Month", "Day"])
                .parseFloats("Precipitation")
                .generateSeries({
                    Date: row => new Date(row.Year, row.Month-1, row.Day),
                })
                .setIndex("Date")
                .bake();
            
            const umbrellaSalesData = results[1]
                .parseDates("Date", "DD/MM/YYYY")
                .parseFloats("Sales")
                .setIndex("Date")
                .bake();

            const mergedData = weatherData 
                .withSeries("UmbrellaSales", umbrellaSalesData.getSeries("Sales"))
                .where(row => row.Precipitation <= 50)
                .where(row => row.UmbrellaSales !== undefined)
                .bake();

            response.json(mergedData.toArray());
        })
        .catch(err => {
            console.error(err);

            response.sendStatus(500);
        });
});

app.listen(3000, () => {
    console.log("Web server listening on port 3000!");
});
