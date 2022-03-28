import { FC, useEffect } from 'react';
import AppRoutes from '@/router';
import Menu from './components/Menu';
import '@/app.css';

const App: FC = () => {
  
	useEffect(() => {
		const theme = localStorage.getItem('theme');
		if (!theme) {
			localStorage.setItem('theme', 'light');
			return;
		}
		if (theme === 'dark') {
			document.documentElement.classList.add('dark');
		}
	}, []);

	return (
		<div className='mx-auto max-w-2xl px-4'>
			<AppRoutes />
			<Menu />
		</div>
	);
};

export default App;
