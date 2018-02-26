import React, { Component } from 'react';
import { connect } from 'react-redux';
import Report from './Report';
import { getReports } from '../../actions/reportsAction';

class ReportsList extends Component {

  componentDidMount() {
    this.props.getReports()
  }

  render() {

    const associatedReports = this.props.reports.filter(report => report.doctor_id === this.props.doctorId)
    const reports = associatedReports.map((report) => {
      return <Report key={report.id} report={report}/>
    })

    if (reports) {
      return(
        <div>
        <div className="reports">
        <h1> Reports</h1>
        {this.props.reports.map(report => <Report key={report.id} report={report} /> )}
        </div>
        </div>
      )
  }
}
}

function mapStateToProps(state) {
  return {
    reports: state.reports
  }
}

export default connect(mapStateToProps, { getReports })(ReportsList);
