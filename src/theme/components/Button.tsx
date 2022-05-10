const buttonTheme = {
	baseStyle: {
		bg: 'none !important',
		_focus: {
			boxShadow: 'none',
			outline: 'none',
		},
		_hover: {
			_disabled: {
				bg: 'secondary.600',
			},
			_loading: {
				bg: 'secondary.600',
			},
		},
	},
	variants: {
		base: {
			bg: 'none !important',
			_hover: {
				bg: 'none !important',
			},
		},
		dark: {
			bg: 'brand.darkBlue',
			color: 'brand.lightBlue',
			p: '10 15',
		},
		light: {
			p: '10 15',
			bg: 'brand.lightBlue',
			color: 'brand.darkBlue',
		},
	},

	defaultProps: {
		variants: 'base',
	},
};
export default buttonTheme;
