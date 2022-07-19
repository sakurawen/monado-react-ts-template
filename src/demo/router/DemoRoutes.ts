import { useRoutes } from 'react-router-dom';
import routes from './routes';

const DemoRoutes = () => {
	const demoRoutes = useRoutes(routes);
	return demoRoutes;
};

export default DemoRoutes;
