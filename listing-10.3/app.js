//
// Simplest possible example of a C3 chart in a web page.
//
// Based on the example line chart: http://c3js.org/samples/simple_multiple.html
//
// To run this, first install bower, then install live-server:
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

    $.get("data.csv")
        .then(function (response) {
            var parseOptions = {
                header: true,
                dynamicTyping: true
            };
            var parsed = Papa.parse(response, parseOptions);

            var chart = c3.generate({
                bindto: "#chart",
                data: {
                    json: parsed.data,
                    keys: {
                        x: "Year", // Specify the CSV file column to use as the X axis.
                        value: [
                            "AvgTemp"
                        ]
                    }
                }
            });
        })
        .catch(function (err) {
            console.error(err);
        });

});

