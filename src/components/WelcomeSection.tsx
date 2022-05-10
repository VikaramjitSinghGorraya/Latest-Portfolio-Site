import React from 'react';
import {
	Flex,
	HStack,
	VStack,
	Heading,
	Box,
	Image,
	Button,
	useDisclosure,
} from '@chakra-ui/react';
import { motion } from 'framer-motion';
import { useLocation, useNavigate } from 'react-router-dom';
import { buttonAnimation } from './Animations';
import { ScrollToPage } from '../helpers/Helpers';
import JavascriptIcon from '../icons/Javascript.svg';
import MongoIcon from '../icons/Mongo.svg';
import ReactIcon from '../icons/React.svg';
import NodeIcon from '../icons/Node.svg';
import HtmlIcon from '../icons/Html.svg';
import CssIcon from '../icons/Css.svg';
import MySqlIcon from '../icons/MySQL.svg';
import { ReactComponent as HomeIcon } from '../icons/Home.svg';

const MotionButton = motion(Button);
const WelcomeSection = () => {
	const { onClose } = useDisclosure();
	const navigation = useNavigate();
	const location = useLocation();
	const displayButtons = () => {
		return (
			<HStack h='100%' py='10'>
				<MotionButton
					py='6'
					px='6'
					{...buttonAnimation}
					onClick={() =>
						ScrollToPage('contact', 200, location.pathname, onClose, navigation)
					}
					variant='dark'
				>
					CONTACT
				</MotionButton>
				<MotionButton
					py='6'
					px='6'
					as='a'
					{...buttonAnimation}
					href='/Resume'
					variant='light'
				>
					RESUME
				</MotionButton>
			</HStack>
		);
	};
	const displayWelcomeText = () => {
		return (
			<VStack pos='relative' w='100%'>
				<Heading
					variant='smallTopHeading'
					position='absolute'
					top={['9.2vw', '60px']}
					left={['6vw', '40px']}
				>
					Hi, I am <span className='blueText'>Vikaramjit Singh</span>
				</Heading>
				<Heading variant='extraLargeHeading' wordBreak='break-word'>
					i write code <span className='blinking'>_</span>
				</Heading>
			</VStack>
		);
	};

	const displayTechnologyIcons = () => {
		return (
			<HStack>
				<Image src={JavascriptIcon} />
				<Image src={MongoIcon} />
				<Image src={ReactIcon} />
				<Image src={NodeIcon} />
				<Image src={HtmlIcon} />
				<Image src={CssIcon} />
				<Image src={MySqlIcon} />
			</HStack>
		);
	};

	const displayWelcomeImage = () => {
		return (
			<Box w='60%' alignSelf='center'>
				<HomeIcon />
			</Box>
		);
	};
	const welcomeSectionContent = () => {
		return (
			<Flex
				direction={['column', 'column', 'column', 'row']}
				justifyContent={['space-between', 'space-between']}
				alignItems='center'
			>
				<VStack h='100%' alignItems='flex-start' spacing={10}>
					{displayWelcomeText()}
					{displayTechnologyIcons()}
					{displayButtons()}
				</VStack>
				{displayWelcomeImage()}
			</Flex>
		);
	};
	return <HStack>{welcomeSectionContent()}</HStack>;
};

export default WelcomeSection;
