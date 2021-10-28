import { combineReducers } from 'redux';

import routing from './routing';
import todo from './todo';

const reducers = combineReducers({
	...routing.reducer,
	...todo.reducer,
});

export default reducers;
