//
// Simplest possible example of a C3 chart in a web page.
//
// Based on the example line chart: http://c3js.org/samples/simple_multiple.html
//
// To run this, first install bower  install live-server:
//
//      npm install -g bower
//
//      npm install -g live-server
//
// Then change directory to the same directory as this file and install dependencies:
//
//      bower install
//
// Then run live server from the same directory as this file:
//
//      live-server
//
// Your browser will open and a line chart will be rendered.
//

"use strict";

$(function () {

    $.get("/rest/data") // Retreive the data via our REST API.
        .then(function (data) {
            var chart = c3.generate({ // Generate the chart the same as before.
                bindto: "#chart",
                data: {
                    json: data,
                    keys: {
                        x: "Year",
                        value: [
                            "AvgTemp"
                        ]
                    },
                    type: "line" // Set the type of the chart, 'line' is actually the default value so is unecessary in this case but I've added it so you know what you need to change when you change the chart type.
                }
            });
        })
        .catch(function (err) {
            console.error(err);
        });

});

