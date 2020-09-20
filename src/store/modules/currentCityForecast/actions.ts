import { ICityResponse } from '../nextDaysForecast/types';
import { ActionTypes } from './types';

export function showCurrentCityInfoRequest(cityName: string) {
  return {
    type: ActionTypes.showCurrentCityInfoRequest,
    payload: {
      cityName,
    },
  };
}

export function showCurrentCityInfoSuccess(cityInfo: ICityResponse) {
  return {
    type: ActionTypes.showCurrentCityInfoSuccess,
    payload: {
      cityInfo,
    },
  };
}
export function showCurrentCityInfoFailure(cityInfo: ICityResponse) {
  return {
    type: ActionTypes.showCurrentCityInfoFailure,
    payload: {
      cityInfo,
    },
  };
}
