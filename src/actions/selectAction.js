import fetch from 'isomorphic-fetch';

export const addToSelect = (selectDoctor) => {
  return {
    type: 'ADD_SELECT',
    selectDoctor
  }
}