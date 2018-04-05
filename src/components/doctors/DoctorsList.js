import React from 'react';
import { Route, Link } from 'react-router-dom';
import { connect } from 'react-redux';
import DoctorsShow from './DoctorsShow';
import Button from '../likes/Button';

const DoctorsList = ({ match, doctorData, report }) => {
  const renderDoctors = doctorData.map((doctor, index) =>
    <div>
      <Link key={doctor.id} to={`/doctors/${doctor.id}`}><img  src={doctor.images.fixed_height.url} alt={doctor.title} /></Link>
      <Button />
    </div>
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
    doctorData: state.doctors.reverse().slice(0, 9)
  }
}

export default connect(mapStateToProps)(DoctorsList)
