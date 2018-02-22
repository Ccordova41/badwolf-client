import fetch from 'isomorphic-fetch';

const API_URL = process.env.REACT_APP_API_URL;

export function fetchReports() {
  return (dispatch) => {
    return fetch(`${API_URL}/reports`)
      .then(res => res.json())
      .then(data => dispatch({ type: 'FETCH_REPORTS', payload: data}))
  }
}

export function addReport(report) {
  return (dispatch) => {
    return fetch(`${API_URL}/reports`, {
      method: 'POST',
      body: JSON.stringify(report),
      headers: {
        'Content-Type': 'application/json',
      }
    })
      .then(res => res.json())
      .then(data => dispatch( { type: 'ADD_REPORT', payload: data }))
  }
}

export const removeReport = (report) => {
  return {
    type: 'REMOVE_REPORT',
    report
  };
};
