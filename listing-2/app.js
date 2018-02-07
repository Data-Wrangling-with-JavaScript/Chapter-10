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

$(function () {

    $.get("data.csv")
        .then(function (response) {
            var dataFrame = dataForge.fromCSV(response)
            var chartData = dataFrame.getSeries("AvgTemp").toArray();

            var chart = c3.generate({
                data: {
                    json: {
                        "NYC Yearly Temperature": chartData,
                    }
                }
            });
        })
        .catch(function (err) {
            console.error(err);
        });

});

