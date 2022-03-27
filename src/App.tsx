import { FC } from 'react';
import '@/app.css';
import TodoLits from '@/components/TodoList';

const App: FC = () => {
	return (
		<div>
			<TodoLits />
		</div>
	);
};

export default App;
