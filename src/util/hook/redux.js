import { bindActionCreators } from 'redux';

import { useSelector, useDispatch } from 'react-redux';

const defaultSelector = state => state;

export const useRedux = (originSelector, actions, options = {}) => {
	const selector = typeof originSelector !== 'function' ? defaultSelector : originSelector;

	const state = useSelector(selector, options.shouldHooksUpdate);
	const dispatch = useDispatch();

	if (typeof actions === 'undefined' || actions === null) {
		return [state, dispatch];
	}

	const boundActions =
		typeof actions === 'function' ? actions(dispatch) : bindActionCreators(actions, dispatch);
		// 用 createAction 創造出來的函式本身不是 action，而是 action creator (蠻神奇的)，
		// 所以用 bindActionCreators 能把 dispatch 跟我們創造出來的 action creator 合併，
		// 也就是讓 action creator 能用 dispatch
	return [state, boundActions];
};
