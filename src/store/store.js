import { applyMiddleware, compose, createStore } from 'redux';
import { routerMiddleware } from 'connected-react-router';
import { createBrowserHistory } from 'history';
import thunk from 'redux-thunk';
import reducer from './reducers/reducer';

export const history = createBrowserHistory();

export default function configureStore() {
  return createStore(
    reducer(history),
    compose(
      applyMiddleware(
        thunk,
        routerMiddleware(history)
      )
    )
  );
}
