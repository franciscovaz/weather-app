import { Reducer } from 'redux';
import { INextDaysForecastState, ActionTypes } from './types';

const INITIAL_STATE: INextDaysForecastState = {
  forecastInfo: [],
  isInfoCardOpen: false,
};

interface EachDayProps {
  dt_txt: string;
}

const nextDaysForecast: Reducer<INextDaysForecastState> = (
  state = INITIAL_STATE,
  action,
) => {
  switch (action.type) {
    case ActionTypes.showNextDaysForecastRequest: {
      return {
        ...state,
        isInfoCardOpen: !state.isInfoCardOpen,
      };

      // break; ??????
    }
    case ActionTypes.showNextDaysForecastSuccess: {
      const { list } = action.payload.cityInfo;

      // average, get 15h weather for each day
      const filteredDaysForecast = list.filter((day: EachDayProps) =>
        day.dt_txt.includes('15:00:00'),
      );

      return {
        isInfoCardOpen: state.isInfoCardOpen,
        forecastInfo: filteredDaysForecast,
      };
      // break; ??????
    }
    default: {
      return state;
    }
  }
};

export default nextDaysForecast;
