import { combineReducers } from 'redux';
import doctorsReducer from './doctorsReducer';
import reports from './reports';
import reportFormData from './reportFormData'

const rootReducer = combineReducers({
  doctors: doctorsReducer,
  reports: reports,
  reportFormData: reportFormData,
})

export default rootReducer
