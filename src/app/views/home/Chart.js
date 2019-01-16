import React, { Component } from "react";
import { CanvasJSChart } from "./canvasjs.react";

const dataPoints1 = [
  { y: 155, label: "Jan" },
  { y: 173, label: "Feb" },
  { y: 175, label: "Mar" },
  { y: 172, label: "Apr" },
  { y: 162, label: "May" },
  { y: 165, label: "Jun" },
  { y: 172, label: "Jul" },
  { y: 168, label: "Aug" },
  { y: 175, label: "Sept" },
  { y: 170, label: "Oct" },
  { y: 165, label: "Nov" },
  { y: 169, label: "Dec" }
];
const dataPoints2 = [
  { y: 150, label: "Jan" },
  { y: 160, label: "Feb" },
  { y: 172, label: "Mar" },
  { y: 168, label: "Apr" },
  { y: 152, label: "May" },
  { y: 160, label: "Jun" },
  { y: 166, label: "Jul" },
  { y: 159, label: "Aug" },
  { y: 153, label: "Sept" },
  { y: 168, label: "Oct" },
  { y: 160, label: "Nov" },
  { y: 168, label: "Dec" }
];
const dataPoints3 = [
  { y: 145, label: "Jan" },
  { y: 140, label: "Feb" },
  { y: 162, label: "Mar" },
  { y: 158, label: "Apr" },
  { y: 142, label: "May" },
  { y: 140, label: "Jun" },
  { y: 156, label: "Jul" },
  { y: 149, label: "Aug" },
  { y: 143, label: "Sept" },
  { y: 158, label: "Oct" },
  { y: 154, label: "Nov" },
  { y: 158, label: "Dec" }
];

export default class Chart extends Component {
  render() {
    const options = {
      theme: "light2",
      animationEnabled: true,
      height: 250,
      axisY: {
        includeZero: false
      },
      data: [
        {
          type: "spline",
          color: "#9C2162",
          lineColor: "#9C2162",
          dataPoints: dataPoints1
        },
        {
          type: "spline",
          color: "#E01B22",
          lineColor: "#E01B22",
          dataPoints: dataPoints2
        },
        {
          type: "spline",
          color: "#F5A623",
          lineColor: "#F5A623",
          dataPoints: dataPoints3
        }
      ]
    };
    return <CanvasJSChart options={options} />;
  }
}
