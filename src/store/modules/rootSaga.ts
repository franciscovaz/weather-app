import { all } from 'redux-saga/effects';

import nextDaysForecast from './nextDaysForecast/sagas';

export default function* rootSaga() {
  return yield all([nextDaysForecast]);
}
