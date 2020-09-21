import { Reducer } from 'redux';
import { ActionTypes, ICurrentCityState } from './types';

const INITIAL_STATE: ICurrentCityState = {
  name: '',
  cityInfo: {
    dt: '',
    main: { temp: 1, temp_max: 1, temp_min: 1 },
    name: '',
    sys: { country: '', sunrise: 1, sunset: 1 },
    weather: [{ description: '', icon: '', main: '' }],
    dt_txt: '',
  },
};

const currentCityForecast: Reducer<ICurrentCityState> = (
  state = INITIAL_STATE,
  action,
) => {
  switch (action.type) {
    case ActionTypes.showCurrentCityInfoRequest: {
      const { cityName } = action.payload;
      return {
        name: cityName,
        cityInfo: [],
      };
    }
    case ActionTypes.showCurrentCityInfoSuccess: {
      const { cityInfo } = action.payload;
      return {
        name: cityInfo.name,
        cityInfo: action.payload,
      };
    }
    default: {
      return state;
    }
  }
};

export default currentCityForecast;
