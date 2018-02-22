import React, { Component } from 'react'
import { connect } from 'react-redux';
// import { bindActionCreators } from 'redux';
import Report from './Report'


class ReportsList extends Component {

  render() {

    const associatedReports = this.props.reportData.filter(report => report.doctor_id === this.props.doctorId)
    const reports = associatedReports.map((report) => {
      return <Report report={report}/>
    })

    if (reports) {
      return(
        <div className="reports">
          <ul className="header">
            <li>
          {reports}
          </li>
            </ul>
        </div>

      )
    }
  }

}

function mapStateToProps(state) {
  return {
    reportData: state.reports
  }
}

export default connect(mapStateToProps)(ReportsList)
