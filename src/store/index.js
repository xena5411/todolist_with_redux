import { createStore, applyMiddleware, compose } from 'redux';

import promiseMiddleware from 'redux-promise-middleware';
import thunkMiddleware from 'redux-thunk-fsa';

import reducers from 'models/reducers';

// middleware 那邊的作用在於可以讓 action 在執行之前，先經過一些中間處理
// 像是 thunk 的話，通常應用情景是你要 fetch API，希望等 fetch 到資料後再回傳 action object，
// 所以可以用 redux-thunk 幫我們做到這個等待的功能

// applyMiddleware() 則是 redux 提供的函式，幫我們對 redux 的 workflow 中加入一些 middleware

// 除了用到 redux-thunk，還用到 createLogger
// logger 是一個讓我們在 console 中能看到 redux store 變化的 debug 套件

const middlewares = [thunkMiddleware, promiseMiddleware];
let composeEnhancers = compose;

if (process.env.NODE_ENV !== 'production') {
	const { createLogger } = require('redux-logger'); // eslint-disable-line global-require
	middlewares.push(createLogger());
	composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
}

export default function configureStore(preState) {
	const store = createStore(reducers, preState, composeEnhancers(applyMiddleware(...middlewares)));

	if (module.hot) {
		module.hot.accept('../models/reducers', () => {
			const nextReducers = require('../models/reducers').default; // eslint-disable-line global-require
			store.replaceReducer(nextReducers);
		});
	}

	return store;
}
