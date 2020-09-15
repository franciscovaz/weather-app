import { ActionTypes, ICityResponse } from './types';

export function showNextDaysForecastRequest(cityName: string) {
  return {
    type: ActionTypes.showNextDaysForecastRequest,
    payload: {
      cityName,
    },
  };
}

export function showNextDaysForecastSuccess(cityInfo: ICityResponse) {
  return {
    type: ActionTypes.showNextDaysForecastSuccess,
    payload: {
      cityInfo,
    },
  };
}
