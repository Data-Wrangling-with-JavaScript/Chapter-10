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

    $.get("/rest/data")
        .then(function (data) {            
            var chart = c3.generate({
                data: {
                    json: data,
                    keys: {
                        x: "Year",
                        value: ["AvgTemp", "Snowfall"]
                    },
                    axes: {
                        AvgTemp: "y",
                        Snowfall: "y2"
                    }
                },
                axis: {
                    y2: {
                        show: true
                    }
                }
            });
        })
        .catch(function (err) {
            console.error(err);
        });

});

