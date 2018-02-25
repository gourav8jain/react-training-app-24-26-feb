import {createStore} from 'redux';

import counterReducer from './state/counterReducer';

let store= createStore(counterReducer);

export default store;