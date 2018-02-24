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

var monthNames = [
    "Jan",
    "Feb",
    "Mar",
    "Apr",
    "May",
    "Jun",
    "Jul",
    "Aug",
    "Sep",
    "Oct",
    "Nov",
    "Dec"
];

function getMonthName (monthNo) { // Get the month name from the month number.
    return monthNames[monthNo-1];
}

$(function () {

    $.get("/rest/data")
        .then(function (data) {
            var chartData = {};
            for (var rowIndex = 0; rowIndex < data.length; ++rowIndex) { // Restructure our data for the pie chart.
                var row = data[rowIndex];
                chartData[getMonthName(row.Month)] = row.AvgTemp; // Organise our temperature data by month.
            }

            var chart = c3.generate({
                bindto: "#chart",
                data: {
                    json: [ chartData ],
                    keys: {
                        value: monthNames
                    },
                    type: "pie" // Change the chart type to 'pie'.
                }
            });
        })
        .catch(function (err) {
            console.error(err);
        });

});

