import {combineReducers} from 'redux';
import appData from './appdata.js';
import getApiResponse from './getApiResponse.js';
 
export const appReducer = combineReducers({ appData : appData, getApiResponse: getApiResponse });