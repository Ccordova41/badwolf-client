const API_URL = process.env.REACT_APP_API_URL;

const DoctorService = {
  fetchDoctors() {
    return fetch(`${API_URL}/doctors`)
      .then(response => response.json())
  }
}

export default DoctorService
