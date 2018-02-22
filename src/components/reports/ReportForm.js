import React, { Component } from 'react'
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { addReport } from '../../actions/reportsAction'

class ReportForm extends Component {
  constructor(props) {
    super(props);

    this.state = {
      name: ''
    }
  }

  handleOnChange(event) {
    this.setState({
      name: event.target.value
    })
  }

  handleOnSubmit(event) {
    event.preventDefault();
    const report = {
      name: this.state.name,
      doctor_id: this.props.doctorId
    }
    this.props.addReport(report)
    this.setState({
      name: ''
    })
  }

  render() {
    return (
      <div className="reports-form">
        <form onSubmit={event => this.handleOnSubmit(event)}>
          <label>Fill out the information below & create your characters card</label><br />
          <input type ="text" value={this.state.name} onChange={event => this.handleOnChange(event)} />
        </form>
      </div>
    )
  }
}
