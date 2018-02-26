import React, { Component } from 'react';
import { connect } from 'react-redux';
import ReportCard from './ReportCard';
import { getReports } from '../../actions/reportsAction';

class ReportsList extends Component {

  render() {

    const associatedReports = this.props.reportData.filter(report => report.doctor_id === this.props.doctorId)
    const reports = associatedReports.map((report) => {
      return <ReportCard key={report.id} report={report}/>
    })

    if (reports) {
      return(
        <div className="ReportsContainer">
          {reports}
        </div>
      )
    }
  }
}

const mapStateToProps = (state) => {
  return ({
      reportData: state.reports

  })
}

export default connect(mapStateToProps, { getReports })(ReportsList);
