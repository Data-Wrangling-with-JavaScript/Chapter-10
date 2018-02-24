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

    $.get("/rest/data")
        .then(function (data) {            
            var chart = c3.generate({
                bindto: "#chart",
                data: {
                    json: data,
                    keys: {
                        x: "Year",
                        value: [
                            "AvgTemp", 
                            "Snowfall"
                        ]
                    },
                    axes: {
                        AvgTemp: "y", // Average temperature should be attached to the first Y axis.
                        Snowfall: "y2" // Snowfall should be attached to the second Y axis.
                    }
                },
                axis: {
                    y2: {
                        show: true // Enable the second Y axis, by default it is disabled.
                    }
                }
            });
        })
        .catch(function (err) {
            console.error(err);
        });

});

