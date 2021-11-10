import { createStore } from 'redux';
import { devToolsEnhancer } from 'redux-devtools-extension';

import { searchReducer } from './reducer/index';

export const store = createStore(searchReducer, devToolsEnhancer());

