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
    document.getElementById("buttonId").style.visibility = "hidden";
  }



  render() {
    return (
      <div className="reports-form">
        <form onSubmit={event => this.handleOnSubmit(event)}>
        <p> Fill out the information below & create your characters card</p> <br />
        <div id="buttonId"> 
          <label>
          Name:
          <input type ="text" name="Name" value={this.state.name} onChange={event => this.handleOnChange(event)} />
          </label>
           <input type="submit" value="Submit" />
           </div>
        </form>
      </div>
    )
  }
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ addReport }, dispatch)
}

export default connect(null, mapDispatchToProps)(ReportForm)
