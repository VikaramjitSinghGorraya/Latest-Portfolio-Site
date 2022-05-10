import React from 'react';
import { Flex, VStack, Button } from '@chakra-ui/react';
import { motion } from 'framer-motion';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import 'react-lazy-load-image-component/src/effects/blur.css';
import 'react-lazy-load-image-component/src/effects/black-and-white.css';
import first from '../icons/0001.jpg';
import second from '../icons/0002.jpg';
import { ReactComponent as ResumeIcon } from '../icons/Resume.svg';
import PageHeading from '../components/PageHeading';
import {
	buttonAnimation,
	pageDisplayAnimation,
} from '../components/Animations';

const MotionVStack = motion(VStack);
const MotionButton = motion(Button);
const Resume = () => {
	const displayResume = () => {
		return (
			<Flex
				direction={['column', 'row']}
				justifyContent={['center', 'space-between']}
				minH='100vh'
				w='100%'
			>
				<LazyLoadImage
					effect='blur'
					height='100%'
					src={first}
					alt='image'
					width='100%'
				/>
				<LazyLoadImage
					effect='blur'
					height='100%'
					src={second}
					alt='image'
					width='100%'
				/>
			</Flex>
		);
	};

	const displayDownloadButton = () => {
		return (
			<MotionButton
				{...buttonAnimation}
				w={['100%', '40%']}
				h='3em'
				m='auto'
				onClick={() => window.open('Resume.pdf', '_blank')}
				variant='dark'
			>
				DOWNLOAD RESUME.PDF
			</MotionButton>
		);
	};
	return (
		<MotionVStack {...pageDisplayAnimation} spacing={6} h='100%' w='100%'>
			<PageHeading pageHeading='My Resume' HeadingIcon={<ResumeIcon />} />
			{displayResume()}
			{displayDownloadButton()}
		</MotionVStack>
	);
};

export default Resume;
