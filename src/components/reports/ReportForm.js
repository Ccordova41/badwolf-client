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


  handleNameOnChange(event) {
    this.setState({
      name: event.target.value
    })
  }


    handlefirst_appearanceOnChange(event) {
      this.setState({
        first_appearance: event.target.value
      })
    }

    handlelatest_appearanceOnChange(event) {
      this.setState({
        latest_appearance: event.target.value
      })
    }

    handlehome_planetOnChange(event) {
      this.setState({
        home_planet: event.target.value
      })
    }

  handleOnSubmit(event) {
    event.preventDefault();
    const report = {
      name: this.state.name.toUpperCase(),
      home_planet: this.state.home_planet,
      first_appearance: this.state.first_appearance,
      latest_appearance: this.state.latest_appearance,
      doctor_id: this.props.doctorId
    }
    this.props.createReport(report)
    this.setState({
      name: '',
      home_planet: '',
      first_appearance: '',
      latest_appearance: ''
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
              onChange={event => this.handleNameOnChange(event)}
              name="name"
              value={this.state.name}
              />
            </div>

          <div>
            <label htmlFor="home_planet">Home Planet:</label>
            <input
              type="text"
                onChange={event => this.handlehome_planetOnChange(event)}
              name="home_planet"
              value={this.state.home_planet}
              />
            </div>

            <div>
              <label htmlFor="first_appearance">First Appearance:</label>
              <input
                type="text"
                onChange={event => this.handlefirst_appearanceOnChange(event)}
                name="first_appearance"
                value={this.state.first_appearance}
                />
              </div>
              <div>
                <label htmlFor="latest_appearance">Latest Appearance:</label>
                <input
                  type="text"
                  onChange={event => this.handlelatest_appearanceOnChange(event)}
                  name="latest_appearance"
                  value={this.state.latest_appearance}
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
