import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import ReportForm from '../reports/ReportForm';
import ReportsList from '../reports/ReportsList';
import { addToSelect } from '../../actions/doctorsAction'

class DoctorsShow extends Component {

  handleOnClick = () => {
    const selectDoctor = {
      select: true,
      doctorId: this.props.doctor.id,
      doctorSlug: this.props.doctor.slug,
      doctorURL: this.props.doctor.images.fixed_height.url
    }
    this.props.addToSelect(selectDoctor);
  }


  render() {
    return (
      <div className="doctors-show">
        <h3>Doctor Who</h3>
        <div className="doctor-gif">
          <img src={this.props.doctor.images.fixed_height.url} /><br />
          <button onClick={this.handleOnClick} className="myButton"><span>Save your character!</span></button>
        </div>
        <div className="reports-show">
          <ReportForm doctorId={this.props.doctor.id} doctorURL={this.props.doctor.images.fixed_height.url}/>
          <ReportsList doctorId={this.props.doctor.id}/>
      </div>
      </div>
    )}
}


function mapStateToProps(state, ownProps) {
  const doctor = state.doctors.find(doctor => doctor.id === ownProps.match.params.doctorId)
  return { doctor }
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ addToSelect }, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(DoctorsShow)
