import { all, takeLatest, put, call } from 'redux-saga/effects';
import { AxiosResponse } from 'axios';
import {
  showNextDaysForecastRequest,
  showNextDaysForecastSuccess,
} from './actions';
import { ActionTypes, ICityResponse } from './types';
import api from '../../../services/api';

type GetNextDaysForecastRequest = ReturnType<
  typeof showNextDaysForecastRequest
>;

function* getNextDaysForecast({ payload }: GetNextDaysForecastRequest) {
  const apiResponse: AxiosResponse<ICityResponse> = yield call(
    api.get,
    `forecast/?q=${payload.cityName}&units=metric&appid=25059393c253e6364173550fdcd1fc10`,
  );

  if (apiResponse.data) {
    yield put(showNextDaysForecastSuccess(apiResponse.data));
    console.log('Saga fez pedido api');
  }
}

export default all([
  takeLatest(ActionTypes.showNextDaysForecastRequest, getNextDaysForecast),
]);
