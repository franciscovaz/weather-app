export enum ActionTypes {
  showCurrentCityInfoRequest = 'SHOW_CURRENT_CITY_INFO_REQUEST',
  showCurrentCityInfoSuccess = 'SHOW_CURRENT_CITY_INFO_SUCCESS',
  showCurrentCityInfoFailure = 'SHOW_CURRENT_CITY_INFO_FAILURE',
}

export interface ICityResponse {
  dt: string;
  main: { temp: number; temp_max: number; temp_min: number };
  name?: string;
  sys: { country: string; sunrise: number; sunset: number };
  weather: Array<{ description: string; icon: string; main: string }>;
  dt_txt: string;
}
export interface ICurrentCityState {
  name: string;
  cityInfo: ICityResponse;
}
