// @flow weak

import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import * as actions from "../../redux/modules/actions";
import NewtestGraph from "./NewtestGraph";

const mapStateToProps = state => {
  return {
    currentView: state.views.currentView
  };
};

const mapDispatchToProps = dispatch => {
  return {
    actions: bindActionCreators(
      {
        enterNewtestGraph: actions.enterNewtestGraph,
        leaveNewtestGraph: actions.leaveNewtestGraph
      },
      dispatch
    )
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(NewtestGraph);
