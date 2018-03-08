import fetch from 'isomorphic-fetch';

const API_URL = process.env.REACT_APP_API_URL;

export function fetchDoctors() {
  return (dispatch) => {
   return fetch(`${API_URL}/doctors`)
    .then(res => res.json())
    .then(data => dispatch({ type: 'FETCH_DOCTORS', payload: data}))
    .catch(error => console.log(error));
  }
}
