import { createAction, handleActions } from 'redux-actions';
import { useRedux } from 'util/hook/redux';

export const addItem = createAction('ADD_ITEM'); // 增加
export const deleteItem = createAction('DELETE_ITEM'); // 刪除某項
export const toggleEditItem = createAction('TOGGLE_EDIT_ITEM'); // 屬性更改 出不出現編輯框
export const editItem = createAction('EDIT_ITEM'); // 編輯修改某項目
export const toggleFinishedItem = createAction('TOGGLE_FINISHED_ITEM'); // 屬性更改 打不打勾某項目
export const deleteAllFinished = createAction('DELETE_ALL_FINISHED'); // 刪掉全部有完成的項目

export const setFilter = createAction('SET_FILTER'); // 屬性是全部(0)、未完成(1)、完成(2)

let Id = 7;

const reducer = {
	list: handleActions(
		{
			ADD_ITEM: (state, action) => {
				// action payload : value
				const inputData = {
					id: Id,
					content: action.payload.value,
					editing: false,
					finished: false,
				};
				Id += 1;
				let leftnum = state.left;
				leftnum += 1;
				return {
					...state,
					data: [inputData, ...state.data],
					left: leftnum,
				};
			},

			DELETE_ITEM: (state, action) => {
				// action payload : id
				let leftnum = state.left;
				const fixedList = state.data.filter(item => {
					if (item.id !== action.payload.id) return true;

					if (!item.finished) leftnum -= 1;
					return false;
				});
				// if(!(listData[action.payload.id].finished)){left--;}
				// listData.splice(action.payload.id, 1); // replaces 1 element at index "action.payload.id"
				return { ...state, data: fixedList, left: leftnum };
			},

			TOGGLE_EDIT_ITEM: (state, action) => {
				// action payload : id
				const listData = state.data;
				listData.map(item => {
					if (item.id === action.payload.id) item.editing = !item.editing;
					return item;
				});
				// listData[action.payload.id].editing = !(listData[action.payload.id].editing);
				return { ...state, data: listData };
			},

			EDIT_ITEM: (state, action) => {
				// action payload : id, value
				const listData = state.data;
				listData.map(item => {
					if (item.id === action.payload.id) item.content = action.payload.value;
					return item;
				});
				// listData[action.payload.id].content = action.payload.value;
				return { ...state, data: listData };
			},

			TOGGLE_FINISHED_ITEM: (state, action) => {
				// action payload : id
				const listData = state.data;
				let leftnum = state.left;
				listData.map(item => {
					if (item.id === action.payload.id) {
						if (item.finished) {
							leftnum += 1;
							item.finished = false;
						} else {
							leftnum -= 1;
							item.finished = true;
						}
					}
					return item;
				});
				return { ...state, data: listData, left: leftnum };
			},

			DELETE_ALL_FINISHED: state => {
				// 不用payload
				const fixedList = state.data.filter(item => {
					if (item.finished) return false;
					return true;
				});
				return { ...state, data: fixedList };
			},
		},
		{
			data: [
				{
					content: '發DM的排班文',
					editing: false,
					finished: true,
					id: 0,
				},
				{
					content: '新歌上架 - 茉莉、群青、布蘭詩歌',
					editing: false,
					finished: true,
					id: 1,
				},
				{
					content: '副頻道上架影片、short',
					editing: false,
					finished: true,
					id: 2,
				},
				{
					content: '副頻道徵稿!!',
					editing: false,
					finished: false,
					id: 3,
				},
				{
					content: 'YT留言和B站彈幕檢查',
					editing: false,
					finished: true,
					id: 4,
				},
				{
					content: '8 萬訂閱感謝圖文',
					editing: false,
					finished: false,
					id: 5,
				},
				{
					content: '(公演完)帶小骨頭練習上字幕、架網站',
					editing: false,
					finished: false,
					id: 6,
				},
			],
			left: 3,
		},
	),
	filter: handleActions(
		{
			SET_FILTER: (state, action) => {
				// payload : mode (0, 1, 2)
				return { ...state, mode: action.payload };
			},
		},
		{
			mode: 0,
		},
	),
};

const listSelector = state => ({
	list: state.list.data,
	left: state.list.left,
});

const filterSelector = state => ({
	filter: state.filter.mode,
});

export const useList = () =>
	useRedux(listSelector, {
		deleteItem,
		toggleEditItem,
		editItem,
		toggleFinishedItem,
		deleteAllFinished,
		addItem,
	});

export const useFilter = () => useRedux(filterSelector, { setFilter });

export default { reducer };
