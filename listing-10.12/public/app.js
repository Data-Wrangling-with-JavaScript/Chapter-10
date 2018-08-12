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
                        x: "Precipitation", // Using rainfall as the X axis in the scatter plot.
                        value: [ "UmbrellaSales" ] // Using umbrella sales as the Y axis in the scatter plot.
                    },
                    type: "scatter" // Set our chart type to 'scatter'.
                }
            });
        })
        .catch(function (err) {
            console.error(err);
        });

});

