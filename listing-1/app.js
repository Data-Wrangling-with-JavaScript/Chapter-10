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

$(function () { // Set the callback that is invoked when the web page has loaded.

    var chart = c3.generate({ // Use C3 to generate the chart.
        bindto: "#chart", // Specify the element in the HTML document where C3 will render the chart.
        data: { // Specifies the data to render in the chart.
            json: {
                "my-data": [30, 200, 100, 400, 150, 250], // Just one data series, using some hard-coded data just so we can quickly see that the chart works.
            }
        }
    });
});

