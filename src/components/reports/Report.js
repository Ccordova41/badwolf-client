import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

class Report extends Component {

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

export default Report
