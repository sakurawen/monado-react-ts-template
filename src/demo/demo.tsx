import '@/app.css';
import components from '@/demo/components/mdx';
import Menu from '@/demo/components/Menu';
import '@/demo/demo.css';
import '@/demo/i18n';
import DemoRoutes from '@/demo/router';
import { MDXProvider } from '@mdx-js/react';
import { FC, useEffect } from 'react';

const Demo: FC = () => {
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
			<MDXProvider components={components}>
				<DemoRoutes />
				<Menu />
			</MDXProvider>
		</div>
	);
};

export default Demo;
