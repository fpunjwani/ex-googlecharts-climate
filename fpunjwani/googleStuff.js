function numberWithCommas(x) {
    return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
}
//  draw graph
// -------------------------------------
google.load("visualization", "1", { packages: ["corechart"] });

function drawChart(dataset, chartType, target) {

    var data = google.visualization.arrayToDataTable(dataset);
    var options = {
        title: 'Climate Temperature Anomaly',
        series: {
            0: { type: "scatter" }
        },

        vAxis: { minValue: -.5, maxValue: .5 },

        trendlines: {
            0: {
                color: 'purple',
                lineWidth: 10,
                opacity: 0.2,
                type: 'polynomial',
                degree: 3,
                showR2: true,
                visibleInLegend: true,
            }
        }
    };

    chartType.draw(data, options);
}