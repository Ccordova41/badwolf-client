import { combineReducers } from 'redux';
import doctorsReducer from './doctorsReducer';
import reports from './reports';
import reportFormData from './reportFormData';
import likeReducer from './likeReducer'

const rootReducer = combineReducers({
  doctors: doctorsReducer,
  reports: reports,
  reportFormData: reportFormData,
  likeReducer: likeReducer
})

export default rootReducer
