import { Outlet } from 'react-router-dom';

function MainLayout() {
	return (
		<div className=" mx-auto  transition-colors duration-200">
			<Outlet />
		</div>
	);
}

export default MainLayout;
