export default function doctorsReducer(state = [], action) {
  switch (action.type) {
    case 'FETCH_DOCTORS':
      const doctors = action.payload.map(doctor => Object.assign({}, doctor, { }))
      return state.concat(doctors)
    default:
      return state;
  }
}
