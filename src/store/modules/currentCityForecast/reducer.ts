import { Reducer } from 'redux';
import { ActionTypes, ICurrentCityState } from './types';

const INITIAL_STATE: ICurrentCityState = {
  name: '',
  cityInfo: [],
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
