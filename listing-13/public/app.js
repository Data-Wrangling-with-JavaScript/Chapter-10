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
                        x: "Precipitation",
                        value: [ "UmbrellaSales" ]
                    },
                    type: "scatter"
                },
                axis: {                    
                    x: {
                        label: {
                            text: 'Rainfall', // Set label text for the X axis.
                            position: 'outer-center', // Place the X axis label in a good position.
                        },
                        tick: {
                            count: 8, // Set a maximum of 8 ticks on the X axis so they are nicely spaced out.
                            format: function (value) { 
                                return value.toFixed(2); // Round X axis tick labels to 2 decimal places.
                            }
                        }
                    },
                    y: {
                        label: {
                            text: 'Umbrella Sales', // Set label text for the Y axis.
                            position: 'outer-middle' // Set the position for the Y axis label.
                        }
                    }
                },
                legend: {
                    show: false // Disable the legend, we don't need it and hiding it makes for a less cluttered chart.
                }
            });
        })
        .catch(function (err) {
            console.error(err);
        });

});

