import React from 'react';
import '../../Reports.css'

const ReportCard = ({ report }) => (


<div key={report.id} className="ReportCard">
  <h3>{report.name}</h3>
  <p>Home Planet: {report.home_planet}</p>
  <p>First Appearance: {report.first_appearance} </p>
  <p>Latest Appearance: {report.latest_appearance} </p>
</div>
)

export default ReportCard;
