import { combineReducers } from 'redux';
import authReducer from './authReducer';
import propertyReducer from './propertyReducer';
export const reducers = combineReducers({ authReducer, propertyReducer });
