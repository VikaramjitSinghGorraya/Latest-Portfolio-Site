import { Link, Image, HStack } from '@chakra-ui/react';
import webdev from '../icons/webdev.svg';
const Logo = () => {
	return (
		<HStack spacing={1} w='60%'>
			<Image h='2rem' w='2rem' src={webdev} />
			<Link href='/'>Vikaramjit.</Link>
		</HStack>
	);
};

export default Logo;
