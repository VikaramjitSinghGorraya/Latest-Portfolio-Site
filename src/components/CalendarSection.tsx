import React from 'react';
import { VStack, HStack, Button, Image, Link } from '@chakra-ui/react';
import { motion } from 'framer-motion';
import GitHubCalendar from 'react-github-calendar';
import { buttonAnimation } from './Animations';
import SectionHeading from './SectionHeading';
import GithubIcon from '../icons/Github.svg';
const MotionButton = motion(Button);
const CalendarSection = () => {
	const displayHeadingAndVisitButton = () => {
		return (
			<HStack w='100%' justifyContent='space-between'>
				<SectionHeading heading='github contributions' />
				<Link href='https://github.com/VikaramjitSinghGorraya' isExternal>
					<MotionButton {...buttonAnimation} variant='light'>
						<Image src={GithubIcon} p='1' className='blueIconColor' />
						VISIT
					</MotionButton>
				</Link>
			</HStack>
		);
	};

	const calendarSectionContent = () => {
		return (
			<HStack w='100%' overflowX='auto' className='hiddenScrollbar'>
				<HStack minW={['300%', '100%']}>
					<GitHubCalendar
						style={{ minWidth: '100%' }}
						blockMargin={10}
						blockSize={20}
						username='VikaramjitSinghGorraya'
						year={2022}
						hideTotalCount
						hideColorLegend
					/>
				</HStack>
			</HStack>
		);
	};
	return (
		<VStack alignItems='flex-start' w='100%' spacing={5}>
			{displayHeadingAndVisitButton()}
			{calendarSectionContent()}
		</VStack>
	);
};

export default CalendarSection;
