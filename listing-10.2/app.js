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

    $.get("data.csv") // Use HTTP GET (via Live-server) to retreive data from the static CSV file that we have included with our web assets.
        .then(function (response) { // Callback is executed when data is asynchronously received.
            var parseOptions = { // Parse options given to PapaParse.
                header: true, // Allow PapaParse to derive field names from the CSV header line.
                dynamicTyping: true // Tell PapaParse to parse CSV string fields to the correct types for us.
            };
            var parsed = Papa.parse(response, parseOptions); // Parse the CSV data retreived from Live-server.

            var chart = c3.generate({ // Generate our chart.
                bindto: "#chart",
                data: {
                    json: parsed.data, // Plug the parsed CSV data into the chart.
                    keys: {
                        value: [
                            "AvgTemp" // Specify which column from the CSV file that we want to appear in the chart.
                        ]
                    }
                }
            });
        })
        .catch(function (err) { // Handle any error that might have occurred.
            console.error(err);
        });

});

