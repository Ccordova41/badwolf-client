const initialState = {
  name: ''
}

export default (state = initialState, action) => {

  switch(action.type) {
    case 'UPDATED_DATA':
      return action.reportFormData;

    case 'RESET_SURFBOARD_FORM':
      return initialState;

    default:
        return state;
  }
}
