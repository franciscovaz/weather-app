import { createStore } from 'redux';
import rootReducer from './modules/rootReducer';
import { INextDaysForecastState } from './modules/nextDaysForecast/types';

export interface IState {
  nextDaysForecast: INextDaysForecastState;
}

const store = createStore(rootReducer);

export default store;
