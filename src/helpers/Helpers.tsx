import { scroller } from 'react-scroll';

const scrollTarget = (target, offset) => {
	scroller.scrollTo(target, {
		smooth: true,
		duration: 800,
		offset: offset,
	});
};
export const ScrollToPage = async (
	target,
	offset,
	currentPath,
	closeNavbar,
	navigation
) => {
	console.log('Here');
	if (currentPath !== '/') {
		await navigation('/');
	}
	scrollTarget(target, offset);
	closeNavbar();
};

export const displayTabTitle = (locationPath) => {
	if (locationPath === '/') {
		document.title = 'Home | Blogaramaa';
		return;
	}
	if (locationPath.includes('post')) {
		const tabTitle = locationPath.substring(6, locationPath.length);
		document.title = tabTitle.includes('-')
			? `${tabTitle.replace('-', ' ')} | Vikaramjit Singh`
			: `${tabTitle} | Vikaramjit Singh`;
		return;
	}
	document.title = `${locationPath.substring(
		1,
		locationPath.length
	)} | Vikaramjit Singh`;
};
