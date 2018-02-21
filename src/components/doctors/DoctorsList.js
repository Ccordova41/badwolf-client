import React from 'react';
import { Route, Link } from 'react-router-dom';
import { connect } from 'react-redux';
import DoctorsShow from './DoctorsShow'

const DoctorsList = ({ match, doctorData }) => {
  const renderDoctors = doctorData.map((doctor, index) =>
    <Link key={doctor.id} to={`/doctors/${doctor.id}`}><img key={index} src={doctor.images.fixed_height.url} alt={doctor.title} /></Link>
  )

  return (
    <div className="doctors-list">
      <Route path={`${match.url}/:doctorId`} component={DoctorsShow} />
      <Route exact path={match.url} render={() => renderDoctors} />
    </div>
  )
}

function mapStateToProps(state) {
  return {
    doctorData: state.doctors
  }
}

export default connect(mapStateToProps)(DoctorsList)
