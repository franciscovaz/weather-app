import { Reducer } from 'redux';
import produce from 'immer';
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
  return produce(state, draft => {
    switch (action.type) {
      case ActionTypes.showNextDaysForecastRequest: {
        draft.isInfoCardOpen = !draft.isInfoCardOpen;
        break;
      }
      case ActionTypes.showNextDaysForecastSuccess: {
        const { list } = action.payload.cityInfo;

        // console.log('Listagem: ', list);
        // average, get 15h weather for each day

        const filteredDaysForecast = list.filter((day: EachDayProps) =>
          day.dt_txt.includes('15:00:00'),
        );

        console.log('Filtrado: ', filteredDaysForecast);

        draft.forecastInfo.push(filteredDaysForecast);

        break;
      }
      default: {
        return draft;
      }
    }
  });
};

export default nextDaysForecast;
