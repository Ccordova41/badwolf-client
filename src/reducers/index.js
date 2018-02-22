import { combineReducers } from 'redux';
import doctorsReducer from './doctorsReducer';
import reportsReducer from './reportsReducer';

const rootReducer = combineReducers({
  doctors: doctorsReducer,
  reports: reportsReducer
})

export default rootReducer
