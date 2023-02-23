import { Outlet } from 'react-router-dom';
import Menu from '@/demo/components/Menu';
const RootLayout = () => {
	return (
		<>
			<Outlet />
			<Menu />
		</>
	);
};

export default RootLayout;
