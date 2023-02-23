import Loading from '@/demo/components/Loading';
import Home from '@/demo/pages/Home';
import About from '@/demo/pages/About';
import { Suspense } from 'react';
import { createBrowserRouter, Navigate } from 'react-router-dom';
import RootLayout from '@/demo/components/RootLayout';

const router = createBrowserRouter([
	{
		path: '',
		element: <RootLayout />,
		children: [
			{
				path: '/',
				element: <Home />,
			},
			{
				path: '/about',
				element: (
					<Suspense fallback={<Loading />}>
						<About />
					</Suspense>
				),
			},
			{
				path: '*',
				element: (
					<Navigate
						to='/'
						replace={true}
					/>
				),
			},
		],
	},
]);

export default router;
