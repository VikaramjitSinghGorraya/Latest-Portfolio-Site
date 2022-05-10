import React from 'react';
import { HStack, VStack } from '@chakra-ui/react';
import { motion } from 'framer-motion';
import WelcomeSection from '../components/WelcomeSection';
import AboutMeSection from '../components/AboutMeSection';
import ProjectSection from '../components/ProjectSection';
import CalendarSection from '../components/CalendarSection';
import ContactSection from '../components/ContactSection';
import { pageDisplayAnimation } from '../components/Animations';

const MotionVStack = motion(VStack);
const Home = () => {
	return (
		<MotionVStack {...pageDisplayAnimation} spacing={20}>
			<HStack w='100%' id='home'>
				{<WelcomeSection />}
			</HStack>
			<HStack w='100%'>{<AboutMeSection />}</HStack>
			<HStack w='100%'>{<ProjectSection />}</HStack>
			<HStack w='100%'>{<CalendarSection />}</HStack>
			<HStack w='100%' id='contact'>
				{<ContactSection />}
			</HStack>
		</MotionVStack>
	);
};

export default Home;
