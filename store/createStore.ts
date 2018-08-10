import {
  applyMiddleware,
  compose,
  createStore as createReduxStore,
  Action,
  AnyAction,
  Store
} from 'redux';
import createSagaMiddleware from 'redux-saga';

import createReducer, { ApplicationState } from './createReducer';
import rootSaga from './rootSaga';

declare global {
  interface Window {
    __REDUX_DEVTOOLS_EXTENSION_COMPOSE__: any;
  }
}

export interface AppStore<S = any, A extends Action = AnyAction>
  extends Store<S, A> {
  sagaTask: any;
  runSagaTask: any;
}

export default function createStore(
  initialState: ApplicationState
): AppStore<ApplicationState> {
  const rootReducer = createReducer();

  const sagaMiddleware = createSagaMiddleware();
  const middlewares = [sagaMiddleware];

  /* eslint-disable no-underscore-dangle */
  const composeEnhancers =
    typeof window === 'object' && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
      ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({
          // Specify extension’s options like name, actionsBlacklist, actionsCreators, serialize...
        })
      : compose;

  const enhancer = composeEnhancers(applyMiddleware(...middlewares));

  const store: AppStore<ApplicationState> = createReduxStore(
    rootReducer,
    initialState,
    enhancer
  );

  store.runSagaTask = () => {
    store.sagaTask = sagaMiddleware.run(rootSaga);
  };
  store.runSagaTask();

  return store;
}
