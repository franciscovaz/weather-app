import { combineReducers } from 'redux';
import nextDaysForecast from './nextDaysForecast/reducer';
import currentCityForecast from './currentCityForecast/reducer';

export default combineReducers({
  nextDaysForecast,
  currentCityForecast,
});
