export default function reportsReducer(state = [], action) {
  switch (action.type) {
    case 'FETCH_REPORTS':
      return state.concat(action.payload)
    case 'ADD_REPORT':
      return state.concat(action.payload)
    case 'REMOVE_REPORT':
      let reports = state.filter(report => report.id !== action.report.id)
      return reports
    default:
      return state;
  }
}
