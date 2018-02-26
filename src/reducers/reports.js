export default (state = [], action) => {
  switch (action.type) {
    case 'FETCH_REPORTS':
      return state.concat(action.payload)
    case 'ADD_REPORT':
      return state.concat(action.report)
      case 'GET_REPORTS_SUCCESS':
    return action.reports;
    default:
      return state;
  }
}
