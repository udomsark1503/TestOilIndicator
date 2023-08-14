import React from "react";
import ReactFC from "react-fusioncharts";
import FusionCharts from "fusioncharts";
import Column2D from "fusioncharts/fusioncharts.charts";
import FusionTheme from "fusioncharts/themes/fusioncharts.theme.fusion";

ReactFC.fcRoot(FusionCharts, Column2D, FusionTheme);

const Chart4 = () => {
    FusionCharts.ready(function() {
        new FusionCharts({
           type: "cylinder",
           renderAt: "chart4-container",
           width: "300",
           height: "300",
           dataFormat: "json",
           dataSource: {
              chart: {
                 caption: "Oil Level Indicator",
                 lowerLimit: "0",
                 upperLimit: "25",
                 numberSuffix: " mPA",
                 plottooltext: "Oxygen Pressure: <b>$dataValue</b>",
                 theme: "gammel"
              },
              value: "23"
           },
           events: {
              rendered: function(evtObj, argObj) {
                 var chartRef = evtObj.sender;
                 chartRef.intervalUpdateId = setInterval(function() {
                    var num = parseInt(Math.random() * (22 - 1) + 1);
                    chartRef.feedData("&value=" + num);
                 }, 2000);
              },
     
              disposed: function(evt, args) {
                 clearInterval(evt.sender.intervalUpdateId);
              }
           }
        }).render();
     });
  return (
   <div>
        <div id="chart4-container"></div>
   </div>

  );
}
export default Chart4;