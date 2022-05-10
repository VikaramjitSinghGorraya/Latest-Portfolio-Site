import React from 'react';
import ReactDOM from 'react-dom/client';
import { QueryClient, QueryClientProvider } from 'react-query';
import { ChakraProvider, ColorModeScript } from '@chakra-ui/react';
import { BrowserRouter } from 'react-router-dom';
import customTheme from './theme/index';
import './index.css';
import App from './App';

const root = ReactDOM.createRoot(
	document.getElementById('root') as HTMLElement
);

const queryClient = new QueryClient();
root.render(
	<React.StrictMode>
		<ColorModeScript initialColorMode={customTheme.config.initialColorMode} />
		<QueryClientProvider client={queryClient}>
			<ChakraProvider theme={customTheme}>
				<BrowserRouter>
					<App />
				</BrowserRouter>
			</ChakraProvider>
		</QueryClientProvider>
	</React.StrictMode>
);
