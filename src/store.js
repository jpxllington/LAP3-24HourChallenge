import { createStore } from 'redux';
import { devToolsEnhancer } from 'redux-devtools-extension';

import { searchReducer } from './reducers';

const store = createStore(searchReducer, devToolsEnhancer());

export default store;