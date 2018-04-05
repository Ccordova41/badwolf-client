export default function doctorsReducer(state = [], action) {
  switch (action.type) {
    case 'FETCH_DOCTORS':
      const doctors = action.payload.map(doctor => Object.assign({}, doctor))
      return state.concat(doctors)
    case 'ADD_SELECT':
      let selectDoctor = state.filter(doctor => doctor.id === action.selectDoctor.doctorId)[0]
      let updatedDoctor = Object.assign({}, selectDoctor, { select: action.selectDoctor.select })
      return state.map(doctor => doctor.id === selectDoctor.id ? updatedDoctor : doctor)
    default:
      return state;
  }
}
