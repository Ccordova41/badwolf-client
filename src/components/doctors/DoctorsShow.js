import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

class DoctorsShow extends Component {

  onUnload = (event) => {
    event.returnValue = "Please don't reload!"
  }

  componentDidMount = () => {
    window.addEventListener("beforeunload", this.onUnload)
  }

  componentWillUnmount = () => {
    window.removeEventListener("beforeunload", this.onUnload)
  }


  render() {
    return (
      <div className="doctors-show">
        <h3>Doctor Who</h3>
        <div className="doctor-gif">
          <img src={this.props.doctor.images.fixed_height.url} />
        </div>
      </div>
    )
  }
}


function mapStateToProps(state, ownProps) {
  const doctor = state.doctors.find(doctor => doctor.id === ownProps.match.params.doctorId)
  return { doctor }
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({  }, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(DoctorsShow)
