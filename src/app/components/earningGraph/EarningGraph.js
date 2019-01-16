// @flow weak

import React, { PureComponent } from "react";
import PropTypes from "prop-types";
import ReactHighcharts from "react-highcharts";
import Chart from "chart.js";
import { earningGraphMockData } from "../../models";
import Panel from "../panel/Panel";
import Highcharts from "highcharts/highstock";
import HighchartsReact from "highcharts-react-official";

var options = {};

export default class EarningGraph extends PureComponent {
  constructor() {
    super();
    this.state = {
      name: "",
      options: any,
      datas: [],
      persons: []
    };
  }

  componentDidMount() {
    axios.get(`https://api.myjson.com/bins/833a8`).then(res => {
      const persons = res.data;
      this.state.name = "Hansa";

      for (var i = 0; i < persons.length; i++) {
        this.state.datas[i] = persons[i].age;
      }

      this.state.options = {
        chart: {
          type: "column"
        },
        title: {
          text: "Vlife Test Data"
        },
        subtitle: {
          text:
            'Source: <a href="http://en.wikipedia.org/wiki/List_of_cities_proper_by_population">Wikipedia</a>'
        },
        series: [
          {
            data: this.state.datas
          }
        ]
      };

      console.log(this.state.datas);
      this.setState({ persons });
    });
  }

  render() {
    return (
      <div>
        <HighchartsReact highcharts={Highcharts} options={this.state.options} />
      </div>
    );
  }

  getCanvaRef = ref => (this.linechart = ref);

  drawChart(data) {
    // BAR CHART
    const options = {
      responsive: true,
      maintainAspectRatio: true
    };

    if (this.linechart) {
      this.chart = new Chart(this.linechart.getContext("2d"), {
        type: "line",
        data,
        options
      });
    }
  }
}

import axios from "axios";
import { any } from "bluebird";

const CallumAPI = {
  posts: [],
  all: function() {
    return axios.get("https://api.myjson.com/bins/pjzbm").then(res => {
      this.posts = res.data;
      return this.posts;
    });
  }
};
