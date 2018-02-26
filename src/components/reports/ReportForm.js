import React, { Component } from 'react'
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { createReport } from '../../actions/reportsAction';


class ReportForm extends Component {

  constructor(props) {
    super(props);

    this.state = {
      name: '',
      home_planet: '',
      first_appearance: '',
      latest_appearance: ''
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
    this.props.createReport(report)
    this.setState({
      name: ''
    })
  }

  render() {
    return (

      <div>
        Add A form to the inventiry
        <form onSubmit={event => this.handleOnSubmit(event)}>


          <div>
            <label htmlFor="name">Name:</label>
            <input
              type="text"
              onChange={event => this.handleOnChange(event)}
              name="name"
              value={this.state.name}
              />
            </div>

            <div>
              <label htmlFor="home_planet">Home Planet:</label>
              <input
                type="text"
                onChange={event => this.handleOnChange(event)}
                name="home_planet"
                value={this.state.home_planet}
                />
              </div>



            <button type="submit"> Add Character!</button>
        </form>
      </div>

    )
  }
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ createReport }, dispatch)
}

export default connect(null, mapDispatchToProps)(ReportForm)
