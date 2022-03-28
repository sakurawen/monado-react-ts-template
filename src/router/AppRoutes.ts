import { useRoutes } from 'react-router-dom';
import routes from './routes';

const AppRoutes = () => {
	const appRoutes = useRoutes(routes);
	return appRoutes;
};


export default AppRoutes