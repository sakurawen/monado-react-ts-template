import Loading from '@/demo/components/Loading';
import Home from '@/demo/pages/Home';
import { lazy, Suspense } from 'react';
import { Navigate, RouteObject } from 'react-router-dom';

const About = lazy(() => import('@/demo/pages/About'));
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
