import { AxiosResponse } from 'axios';
import { all, takeLatest, put, call } from 'redux-saga/effects';
import api from '../../../services/api';
import { ICityResponse } from '../nextDaysForecast/types';
import {
  showCurrentCityInfoSuccess,
  showCurrentCityInfoRequest,
} from './actions';
import { ActionTypes } from './types';

type GetCurrentCityForecast = ReturnType<typeof showCurrentCityInfoRequest>;

function* getCurrentCityForecast({ payload }: GetCurrentCityForecast) {
  const apiResponse: AxiosResponse<ICityResponse> = yield call(
    api.get,
    `weather/?q=${payload.cityName}&units=metric&appid=25059393c253e6364173550fdcd1fc10`,
  );

  if (apiResponse.data) {
    yield put(showCurrentCityInfoSuccess(apiResponse.data));
  }
}

export default all([
  takeLatest(ActionTypes.showCurrentCityInfoRequest, getCurrentCityForecast),
]);
