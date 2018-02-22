import React, { Component } from 'react';
import { removeReport } from '../../actions/reportsAction'
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

class Report extends Component {


  handleOnClick = () => {
    this.props.removeReport(this.props.report)
  }

  render() {

    return (
      <div>
        <li key={this.props.report.id}>
          <span className="report">{this.props.report.name}</span>
        </li>
      </div>
    )
  }
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ removeReport }, dispatch)
}

export default connect(null, mapDispatchToProps)(Report);
