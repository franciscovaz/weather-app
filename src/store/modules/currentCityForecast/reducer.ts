import { Reducer } from 'redux';
import { ActionTypes, ICurrentCityState } from './types';

const INITIAL_STATE: ICurrentCityState = {
  dt: '',
  main: { temp: 0, temp_max: 0, temp_min: 0 },
  name: '',
  sys: { country: '', sunrise: 0, sunset: 0 },
  weather: [{ description: '', icon: '', main: '' }],
  dt_txt: '',
};

const currentCityForecast: Reducer<ICurrentCityState> = (
  state = INITIAL_STATE,
  action,
) => {
  switch (action.type) {
    case ActionTypes.showCurrentCityInfoRequest: {
      console.log('Request Current');
      return state;
    }
    default: {
      return state;
    }
  }
};

export default currentCityForecast;
