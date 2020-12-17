import {combineReducers, createStore} from 'redux';
import {settingsReducer} from './settings';
import {composeWithDevTools} from 'redux-devtools-extension';

const rootReducer = combineReducers({
  settings: settingsReducer,
});

const store = createStore(rootReducer, composeWithDevTools());

export default store;
