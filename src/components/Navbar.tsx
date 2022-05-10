import React from 'react';
import {
	HStack,
	Image,
	useColorMode,
	Button,
	useDisclosure,
	useMediaQuery,
	Drawer,
	DrawerOverlay,
	DrawerContent,
	DrawerHeader,
	VStack,
	Link,
	DrawerBody,
} from '@chakra-ui/react';
import { useLocation } from 'react-router-dom';
import { ScrollToPage } from '../helpers/Helpers';
import Share from './Share';
import Logo from './Logo';
import sun from '../icons/sun.svg';
import Home from '../icons/HomeNavIcon.svg';
import Contact from '../icons/Message.svg';
import Resume from '../icons/ResumeNavIcon.svg';
import Github from '../icons/Github.svg';
import Linkedin from '../icons/LinkedinNavIcon.svg';
import Blogs from '../icons/BlogNavIcon.svg';
import ShareIcon from '../icons/ShareNavIcon.svg';
import moon from '../icons/moon.svg';
import Menu from '../icons/Menu.svg';
import Webdev from '../icons/webdev.svg';

const Navbar = ({ navigation }) => {
	const location = useLocation();
	const { colorMode, toggleColorMode } = useColorMode();
	const { isOpen, onOpen, onClose } = useDisclosure();
	const btnRef = React.useRef<HTMLButtonElement>(null);
	const [isLessThan768] = useMediaQuery('(max-width: 768px)');

	const displayDesktopLinks = () => {
		return (
			<HStack w='100%' justifyContent='space-evenly'>
				<Link
					p='2'
					borderRadius='5%'
					bg={location.pathname === '/' ? 'brand.lightBlue' : ''}
					color={location.pathname === '/' ? 'brand.darkBlue' : ''}
					onClick={() =>
						ScrollToPage('home', -100, location.pathname, onClose, navigation)
					}
				>
					HOME
				</Link>

				<Link
					onClick={() =>
						ScrollToPage('contact', 100, location.pathname, onClose, navigation)
					}
				>
					CONTACT
				</Link>
				<Link
					p='2'
					borderRadius='5%'
					bg={location.pathname === '/Resume' ? 'brand.lightBlue' : ''}
					color={location.pathname === '/Resume' ? 'brand.darkBlue' : ''}
					href='/Resume'
				>
					RESUME
				</Link>
				<Link href='https://github.com/VikaramjitSinghGorraya' isExternal>
					GITHUB
				</Link>
				<Link href='https://www.linkedin.com/in/vikaramjit-goraya/' isExternal>
					LINKEDIN
				</Link>
				<Link
					href='https://www.blogaramaa.com/profile/6275b827d858b49c02075ea0'
					isExternal
				>
					BLOGS
				</Link>
				<Share />
				<Button variant='base' onClick={toggleColorMode}>
					<Image
						src={colorMode === 'light' ? moon : sun}
						h='1.3rem'
						w='1.3rem'
					/>
				</Button>
			</HStack>
		);
	};
	const desktopNavbar = () => {
		return (
			<HStack
				w='100%'
				justifyContent='space-around'
				bg={colorMode === 'dark' ? '#141414bd' : 'none'}
				pos='fixed'
				h='56px'
				top='0'
				zIndex={100}
				boxShadow='0 0px 5px 3px rgba(0, 0, 0, 0.08)'
				backdropFilter='auto'
				backdropBlur='10px'
				px='10'
			>
				<Logo />
				{displayDesktopLinks()}
			</HStack>
		);
	};

	const displayMobileLinks = () => {
		return (
			<VStack
				justifyContent='space-between'
				h='85%'
				alignItems='center'
				w='100%'
			>
				<HStack
					bg={location.pathname === '/' ? 'brand.lightBlue' : ''}
					color={location.pathname === '/' ? 'brand.darkBlue' : ''}
					h='3rem'
					w='80%'
					justifyContent='flex-start'
					borderRadius='10'
					px='5'
				>
					<Image
						src={Home}
						className={location.pathname === '/' ? 'blueIconColor' : ''}
					/>
					<Link
						onClick={() =>
							ScrollToPage('home', -100, location.pathname, onClose, navigation)
						}
					>
						Home
					</Link>
				</HStack>

				<HStack
					bg={location.pathname === '/Contact' ? 'brand.lightBlue' : ''}
					color={location.pathname === '/Contact' ? 'brand.darkBlue' : ''}
					h='3rem'
					w='80%'
					justifyContent='flex-start'
					borderRadius='10'
					px='5'
				>
					<Image src={Contact} />
					<Link
						onClick={() =>
							ScrollToPage(
								'contact',
								100,
								location.pathname,
								onClose,
								navigation
							)
						}
					>
						Contact
					</Link>
				</HStack>
				<HStack
					bg={location.pathname === '/Resume' ? 'brand.lightBlue' : ''}
					color={location.pathname === '/Resume' ? 'brand.darkBlue' : ''}
					h='3rem'
					w='80%'
					justifyContent='flex-start'
					borderRadius='10'
					px='5'
				>
					<Image
						src={Resume}
						className={location.pathname === '/Resume' ? 'blueIconColor' : ''}
					/>{' '}
					<Link href='/Resume'>Resume</Link>
				</HStack>
				<HStack
					h='3rem'
					w='80%'
					justifyContent='flex-start'
					borderRadius='10'
					px='5'
				>
					<Image src={Github} />
					<Link href='https://github.com/VikaramjitSinghGorraya' isExternal>
						Github
					</Link>
				</HStack>
				<HStack
					h='3rem'
					w='80%'
					justifyContent='flex-start'
					borderRadius='10'
					px='5'
				>
					<Image src={Linkedin} />
					<Link
						href='https://www.linkedin.com/in/vikaramjit-goraya/'
						isExternal
					>
						LinkedIn
					</Link>
				</HStack>
				<HStack
					h='3rem'
					w='80%'
					justifyContent='flex-start'
					borderRadius='10'
					px='5'
				>
					<Image src={Blogs} />
					<Link
						href='https://www.blogaramaa.com/profile/6275b827d858b49c02075ea0'
						isExternal
					>
						Blogs
					</Link>
				</HStack>
				<HStack
					h='3rem'
					w='80%'
					justifyContent='flex-start'
					borderRadius='10'
					px='5'
				>
					<Image src={ShareIcon} />
					<Share />
				</HStack>
			</VStack>
		);
	};
	const navbarDrawer = () => {
		return (
			<>
				<Button
					ref={btnRef}
					bg='transparent'
					color='rgb(0, 0, 0)'
					onClick={onOpen}
				>
					<Image src={Menu} />
				</Button>
				<Drawer
					isOpen={isOpen}
					placement='left'
					onClose={onClose}
					finalFocusRef={btnRef}
				>
					<DrawerOverlay />
					<DrawerContent
						maxW='70%'
						bg={colorMode === 'dark' ? 'brand.darkNavbar' : '#fafafa'}
					>
						<DrawerHeader textAlign='center'>
							<HStack w='fit-content' m='auto'>
								<Logo />
							</HStack>
						</DrawerHeader>
						<DrawerBody>{displayMobileLinks()}</DrawerBody>
					</DrawerContent>
				</Drawer>
			</>
		);
	};
	const mobileNavbar = () => {
		return (
			<HStack
				justifyContent='space-between'
				p='2'
				boxShadow='0 0px 5px 3px rgba(0, 0, 0, 0.08)'
				backdropFilter='auto'
				backdropBlur='10px'
				position='fixed'
				bottom='0'
				zIndex='100'
				w='100%'
				h='56px'
			>
				{navbarDrawer()}

				<Image
					src={Webdev}
					h='2rem'
					w='2rem'
					onClick={() =>
						ScrollToPage('home', -100, location.pathname, onClose, navigation)
					}
				/>
				<Button onClick={toggleColorMode} variant='base'>
					<Image
						src={colorMode === 'light' ? moon : sun}
						h='1.5rem'
						w='1.5rem'
					/>
				</Button>
			</HStack>
		);
	};

	return (
		<HStack w='100%'>{isLessThan768 ? mobileNavbar() : desktopNavbar()}</HStack>
	);
};

export default Navbar;
