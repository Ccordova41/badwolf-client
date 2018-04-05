export const addToSelect = (selectDoctor) => {
  return {
    type: 'ADD_SELECT',
    selectDoctor
  }
}

export const onIncrement = () => {
  return {
    type: 'INCREMENT'
  }
}
