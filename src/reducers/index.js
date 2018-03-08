import { combineReducers } from 'redux';
import doctorsReducer from './doctorsReducer';

const rootReducer = combineReducers({
  doctors: doctorsReducer,
})

export default rootReducer
