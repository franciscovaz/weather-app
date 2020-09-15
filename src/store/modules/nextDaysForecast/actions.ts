import { ActionTypes } from './types';

export function showNextDaysForecastRequest(cityName: string) {
  return {
    type: ActionTypes.showNextDaysForecastRequest,
    payload: {
      cityName,
    },
  };
}
