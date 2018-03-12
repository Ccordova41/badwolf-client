
import fetch from 'isomorphic-fetch';

const API_URL = process.env.REACT_APP_API_URL;

const setReports = reports => {
  return {
    type: 'GET_REPORTS_SUCCESS',
    reports
  }
}

const addReport = report => {
  return {
    type: 'ADD_REPORT',
    report
  }
}

export const getReports = () => {
  return dispatch => {
   return fetch(`${API_URL}/reports`)
    .then(response => response.json())
    .then(reports => dispatch(setReports(reports)))
    .catch(error => console.log(error));
  }
}


export const createReport = report => {
  return dispatch => {
    return fetch(`${API_URL}/reports`, {
      method: "POST",
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ report: report })
    })
      .then(response => response.json())
      .then(report => {
        dispatch(addReport(report))

      })
      .catch(error => console.log(error))
  }
}

export const updateReportFormData = reportFormData => {
  return {
    type: 'UPDATED_DATA',
    reportFormData
  }
}
