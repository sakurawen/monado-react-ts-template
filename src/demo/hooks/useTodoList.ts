import create from 'zustand';
import { immer } from 'zustand/middleware/immer';

type ListItem = {
	text: string;
};

type TodoListStore = {
	inputValue: string;
	data: ListItem[];
	setInputValue: (val: string) => void;
	pushListItem: (item: ListItem) => void;
	delListItem: (idx: number) => void;
	cleanInputValue: () => void;
};

const useTodoList = create(
	immer<TodoListStore>((set) => ({
		inputValue: '',
		data: [],
		setInputValue: (val: string) =>
			set((state) => {
				state.inputValue = val;
			}),
		pushListItem: (item: ListItem) =>
			set((state) => {
				state.data.push(item);
			}),
		delListItem: (idx: number) =>
			set((state) => {
				state.data.splice(idx, 1);
			}),
		cleanInputValue: () =>
			set((state) => {
				state.inputValue = '';
			}),
	}))
);

export default useTodoList;
