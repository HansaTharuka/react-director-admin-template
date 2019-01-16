// @flow weak

import React, { PureComponent } from "react";
import PropTypes from "prop-types";
import {
  AnimatedView,
  Panel,
  NewtestGraph as NewtestGraphComponent
} from "../../components";
import Highlight from "react-highlight";

class NewtestGraph extends PureComponent {
  static propTypes = {
    actions: PropTypes.shape({
      enterNewtestGraph: PropTypes.func.isRequired,
      leaveNewtestGraph: PropTypes.func.isRequired
    })
  };

  state = {
    labels: ["January", "February", "March", "April", "May", "June", "July"],
    datasets: [
      {
        label: "My First dataset",
        fillColor: "rgba(220,220,220,0.2)",
        strokeColor: "rgba(220,220,220,1)",
        pointColor: "rgba(220,220,220,1)",
        pointStrokeColor: "#fff",
        pointHighlightFill: "#fff",
        pointHighlightStroke: "rgba(220,220,220,1)",
        data: [65, 59, 80, 81, 56, 55, 40]
      },
      {
        label: "My Second dataset",
        fillColor: "rgba(151,187,205,0.2)",
        strokeColor: "rgba(151,187,205,1)",
        pointColor: "rgba(151,187,205,1)",
        pointStrokeColor: "#fff",
        pointHighlightFill: "#fff",
        pointHighlightStroke: "rgba(151,187,205,1)",
        data: [28, 48, 40, 19, 86, 27, 90]
      }
    ]
  };

  componentWillMount() {
    const {
      actions: { enterNewtestGraph }
    } = this.props;
    enterNewtestGraph();
  }

  componentWillUnmount() {
    const {
      actions: { leaveNewtestGraph }
    } = this.props;
    leaveNewtestGraph();
  }

  render() {
    const { labels, datasets } = this.state;

    return (
      <AnimatedView>
        {/* preview: */}
        <div className="row">
          <div className="col-xs-12">
            <Panel
              title="New Test graph"
              hasTitle={true}
              bodyBackGndColor={"#F4F5F6"}
            >
              <div className="row">
                <div className="col-md-8 col-md-offset-2">
                  <NewtestGraphComponent labels={labels} datasets={datasets} />
                </div>
              </div>
            </Panel>
          </div>
        </div>
        {/* source: */}
        <div className="row">
          <div className="col-xs-12">
            <Panel title="Source" hasTitle={true}>
              <Highlight className="javascript">{source}</Highlight>
            </Panel>
          </div>
        </div>
      </AnimatedView>
    );
  }
}

export default NewtestGraph;
