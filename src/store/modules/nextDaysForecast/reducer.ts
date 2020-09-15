import { Reducer } from 'redux';
import produce from 'immer';
import { INextDaysForecastState, ActionTypes } from './types';

const INITIAL_STATE: INextDaysForecastState = {
  forecastInfo: [],
  isInfoCardOpen: false,
};

const nextDaysForecast: Reducer<INextDaysForecastState> = (
  state = INITIAL_STATE,
  action,
) => {
  return produce(state, draft => {
    switch (action.type) {
      case ActionTypes.showNextDaysForecastRequest: {
        draft.isInfoCardOpen = !draft.isInfoCardOpen;
        console.log('Request next days');
        break;
      }
      case ActionTypes.showNextDaysForecastSuccess: {
        console.log('Info da api ja no reducxer: ', action.payload);
        break;
      }
      default: {
        return draft;
      }
    }
  });
};

export default nextDaysForecast;
