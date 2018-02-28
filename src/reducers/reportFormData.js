const initialState = {
  name: '',
  fact: '',
  job: ''
}

export default (state = initialState, action) => {

  switch(action.type) {
    case 'UPDATED_DATA':
      return action.reportFormData;

    case 'RESET_REPORT_FORM':
      return initialState;

    default:
        return state;
  }
}
