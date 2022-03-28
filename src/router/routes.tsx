import { RouteObject, Navigate } from 'react-router-dom';
import Home from '@/pages/Home';
import { lazy, Suspense } from 'react';
import Loading from '@/components/Loading';

const About = lazy(() => import('@/pages/About'));
const routes: RouteObject[] = [
	{
		path: '/',
		index: true,
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
		element: <Navigate to='/' replace={true} />,
	},
];

export default routes;
