import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';

class SelectDoctors extends Component {

  render() {
    const selectDoctors = this.props.doctors.filter(doctor => doctor.select === true)
    const selectDoctor = selectDoctors.map(doctor => <Link key={doctor.id} to={`/doctors/${doctor.id}`}><img alt={doctor.title} key={doctor.id} src={doctor.images.fixed_height.url} /></Link>)

    return (
      <div>
        <div className="select-doctors">
          <h3>Your Characters: </h3>
            {selectDoctor}
        </div>
      </div>
    )
  }
}

export default connect(state => {
  return {
    doctors: state.doctors
  }
})(SelectDoctors)
