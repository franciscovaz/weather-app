import { all } from 'redux-saga/effects';

import nextDaysForecast from './nextDaysForecast/sagas';
import currentCityForecast from './currentCityForecast/sagas';

export default function* rootSaga() {
  return yield all([nextDaysForecast, currentCityForecast]);
}
