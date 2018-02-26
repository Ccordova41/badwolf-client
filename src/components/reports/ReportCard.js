import React from 'react';
import '../../Reports.css'

const ReportCard = ({ report }) => (


<div key={report.id} className="ReportCard">
  <h3>{report.name}</h3>
</div>
)

export default ReportCard;