export const pageDisplayAnimation = {
	pos: 'relative',
	initial: { top: 18, opacity: 0 },
	animate: { top: 0, opacity: 1 },
	transition: { delay: 0, duration: 0.4, ease: 'easeIn' },
};

export const buttonAnimation = {
	pos: 'relative',
	whileHover: { scale: 1.03 },
	whileTap: { scale: 0.99 },
	transition: { duration: 0.1 },
};
