export enum ActionTypes {
  showNextDaysForecastRequest = 'SHOW_NEXT_DAY_FORECAST_REQUEST',
  showNextDaysForecastSuccess = 'SHOW_NEXT_DAY_FORECAST_SUCCESS',
  showNextDaysForecastFailure = 'SHOW_NEXT_DAY_FORECAST_FAILURE',
}

export interface ICity {
  cityName: string;
}
export interface ICityResponse {
  main: { temp: number; temp_max: number; temp_min: number };
  name: string;
  sys: { country: string; sunrise: number; sunset: number };
  weather: Array<{ description: string; icon: string; main: string }>;
}
export interface INextDaysForecastState {
  forecastInfo: [];
  isInfoCardOpen: boolean;
}
