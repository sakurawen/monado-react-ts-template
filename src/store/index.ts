import { configureStore } from '@reduxjs/toolkit';
import todoListSlice from './reducer/todoListSlice';

const store = configureStore({
	reducer: {
		todoList: todoListSlice,
	},
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export default store;
