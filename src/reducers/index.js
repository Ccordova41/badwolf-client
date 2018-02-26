import { combineReducers } from 'redux';
import doctorsReducer from './doctorsReducer';
import reportsReducer from './reportsReducer';
import reportFormData from './reportFormData'

const rootReducer = combineReducers({
  doctors: doctorsReducer,
  reports: reportsReducer,
  reportFormData: reportFormData,
})

export default rootReducer
