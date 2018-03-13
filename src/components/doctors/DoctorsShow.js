import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import ReportForm from '../reports/ReportForm';
import ReportsList from '../reports/ReportsList';
import { addToSelect } from '../../actions/selectAction'

class DoctorsShow extends Component {


  handleOnClick = (event) => {
     event.preventDefault();
    const selectDoctor = {
      select: true,
      doctorId: this.props.doctor.id,
      doctorSlug: this.props.doctor.slug,
      doctorURL: this.props.doctor.images.fixed_height.url
    }
    const c = this.props.selectedDoctors.filter(doctor => doctor.slug === this.props.doctor.slug)

    if (c.length === 0 ) {
      this.props.addToSelect(selectDoctor);
    } else {
      alert('Hey! You have already saved this :)')

    }
  }

  render() {
    return (
      <div className="doctors-show">
        <h3>Doctor Who</h3>
        <div className="doctor-gif">
          <img src={this.props.doctor.images.fixed_height.url} alt="Doctor Who"/><br />
          <button onClick={this.handleOnClick} className="myButton"><span>Save your character!</span></button>
          </div>

          <div className="reports-show">
          <ReportForm doctorId={this.props.doctor.id}/>
          <ReportsList doctorId={this.props.doctor.id}/>

        </div>

      </div>
    )}
  }


function mapStateToProps(state, ownProps) {
  const selectedDoctors = state.doctors.filter(doctor => doctor.select === true)
  const doctor = state.doctors.find(doctor => doctor.id === ownProps.match.params.doctorId)
  return { doctor, selectedDoctors }
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ addToSelect }, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(DoctorsShow)
