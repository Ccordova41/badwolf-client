export default (state = {
  like: 0
}, action) => {
  switch (action.type) {
    case 'INCREMENT':
         return { ...state, like: state.like + 1 };
    default:
      return state;
  }
}
