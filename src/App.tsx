import React, { useState, useEffect } from 'react';
import { Route, Routes, useLocation, useNavigate } from 'react-router-dom';
import { VStack, Box, useColorMode } from '@chakra-ui/react';
import { displayTabTitle } from './helpers/Helpers';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import Resume from './pages/Resume';

function App() {
	const navigate = useNavigate();
	const location = useLocation();
	const { colorMode } = useColorMode();

	const [mode, setMode] = useState(
		localStorage.getItem('chakra-ui-color-mode')
	);

	useEffect(() => {
		setMode(localStorage.getItem('chakra-ui-color-mode'));
		displayTabTitle(location.pathname);
	}, [colorMode, location.pathname]);

	return (
		<Box
			color={mode === 'dark' ? 'brand.lightGray' : 'brand.gray'}
			bg={mode === 'dark' ? 'black' : '#fafafa'}
			pb='20'
		>
			<Navbar navigation={navigate} />
			<VStack minH='100vh' w='100%' m='auto' p={['5', '10']}>
				<Routes>
					<Route path='/' element={<Home />} />
					<Route path='/Resume' element={<Resume />} />
				</Routes>
			</VStack>
		</Box>
	);
}

export default App;
