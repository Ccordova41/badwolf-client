import React, { Component } from 'react'
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { createReport } from '../../actions/reportsAction';


class ReportForm extends Component {

  constructor(props) {
    super(props);

    this.state = {
      name: '',
      fact: '',
      job: ''
    }
  }


  handleNameOnChange(event) {
    this.setState({
      name: event.target.value
    })
  }


    handlefactOnChange(event) {
      this.setState({
        fact: event.target.value
      })
    }

    handlejobOnChange(event) {
      this.setState({
        job: event.target.value
      })
    }


  handleOnSubmit(event) {
    event.preventDefault();
    const report = {
      name: this.state.name.toUpperCase(),
      fact: this.state.fact,
      job: this.state.job,
      doctor_id: this.props.doctorId
    }
    this.props.createReport(report)
    this.setState({
      name: '',
      fact: '',
      job: ''
    })
  }

  render() {
    return (

      <div>
        <h2>Fill out all the awesome info you have on these characters!</h2> 
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
            <label htmlFor="fact">Fact:</label>
            <input
              type="text"
              onChange={event => this.handlefactOnChange(event)}
              name="fact"
              value={this.state.fact}
              />
            </div>

            <div>
              <label htmlFor="job">Job:</label>
              <input
                type="text"
                onChange={event => this.handlejobOnChange(event)}
                name="job"
                value={this.state.job}
                />
              </div>
            <button type="submit">Alons-y!</button>
        </form>
      </div>

    )
  }
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ createReport }, dispatch)
}

export default connect(null, mapDispatchToProps)(ReportForm)
