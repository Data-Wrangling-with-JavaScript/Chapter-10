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
                        x: "Date", // Now using a date as our X axis.
                        value: [ "AvgTemp" ]
                    }
                },
                axis: {
                    x: {
                        type: 'timeseries', // Set the type of the X axis to 'timeseries'.
                        tick: {
                            rotate : 50, // Rotate the X axis off the horizontal for better layout.
                            format: '%Y-%m-%d', // Format string so that C3 can render the X axis labels.
                            count: 12 // The maximum number of ticks/labels to render so they aren't too cluttered.
                        }
                    }
                },
                point: {
                    show: false // Disable rendering of points so the chart looks less cluttered.
                }
            });
        })
        .catch(function (err) {
            console.error(err);
        });

});

