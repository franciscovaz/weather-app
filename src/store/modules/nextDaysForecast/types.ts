export enum ActionTypes {
  showNextDaysForecastRequest = 'SHOW_NEXT_DAY_FORECAST_REQUEST',
  showNextDaysForecastSuccess = 'SHOW_NEXT_DAY_FORECAST_SUCCESS',
  showNextDaysForecastFailure = 'SHOW_NEXT_DAY_FORECAST_FAILURE',
}

export interface INextDaysForecastState {
  forecastInfo: [];
  isInfoCardOpen: boolean;
}
