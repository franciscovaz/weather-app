import { createStore, applyMiddleware } from 'redux';
import createSagaMiddleware from 'redux-saga';

import { composeWithDevTools } from 'redux-devtools-extension';
import rootReducer from './modules/rootReducer';

import { INextDaysForecastState } from './modules/nextDaysForecast/types';
import rootSaga from './modules/rootSaga';

export interface IState {
  nextDaysForecast: INextDaysForecastState;
}

const sagaMiddleware = createSagaMiddleware();

const middlewares = [sagaMiddleware];

const store = createStore(
  rootReducer,
  composeWithDevTools(applyMiddleware(...middlewares)),
);

sagaMiddleware.run(rootSaga);

export default store;
