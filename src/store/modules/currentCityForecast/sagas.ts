import { AxiosResponse } from 'axios';
import { all, takeLatest, put, call } from 'redux-saga/effects';
import api from '../../../services/api';
import { ICityResponse } from '../nextDaysForecast/types';
import { showCurrentCityInfoRequest } from './actions';
import { ActionTypes } from './types';

type GetCurrentCityForecast = ReturnType<typeof showCurrentCityInfoRequest>;

function getCurrentCityForecast({ payload }: GetCurrentCityForecast) {
  console.log('cenas: ', payload);
}

export default all([
  takeLatest(ActionTypes.showCurrentCityInfoRequest, getCurrentCityForecast),
]);
