import { extendTheme } from '@chakra-ui/react';
import buttonTheme from './components/Button';
import linkTheme from './components/Link';
import colorTheme from './Color';
import globalTheme from './Global';
import headingTheme from './components/Heading';
const overrides = {
	config: {
		initialColorMode: localStorage.getItem('chakra-ui-color-mode'),
		useSystemColorMode: false,
	},
	styles: {
		...globalTheme,
	},
	colors: { ...colorTheme },
	components: {
		Button: {
			...buttonTheme,
		},
		Link: {
			...linkTheme,
		},
		Heading: {
			...headingTheme,
		},
	},
};

export default extendTheme(overrides);
