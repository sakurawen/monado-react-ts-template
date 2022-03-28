import { createSlice, PayloadAction } from '@reduxjs/toolkit';

type ListItem = {
	text: string;
};

const todoListSlice = createSlice({
	name: 'todoList',
	initialState: {
		inputVal: '',
		data: [] as ListItem[],
	},
	reducers: {
		setInputValue(state, action: PayloadAction<string>) {
			state.inputVal = action.payload;
		},
		pushListItem(state, action: PayloadAction<ListItem>) {
			state.data.push(action.payload);
			state.inputVal = '';
		},
		delListItem(state, action: PayloadAction<number>) {
			state.data.splice(action.payload, 1);
		},
		cleanInputValue(state) {
			state.inputVal = '';
		},
	},
});

export const todoListSliceAction = todoListSlice.actions;

export default todoListSlice.reducer;
