import { ActionTypes } from './types';

export function showCurrentCityInfoRequest(cityName: string) {
  return {
    type: ActionTypes.showCurrentCityInfoRequest,
    payload: {
      cityName,
    },
  };
}
