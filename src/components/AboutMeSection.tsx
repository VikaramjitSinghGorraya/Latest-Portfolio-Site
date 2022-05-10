import React from 'react';
import { VStack } from '@chakra-ui/react';
import SectionHeading from './SectionHeading';
const AboutMeSection = () => {
	return (
		<VStack alignItems='flex-start' w='100%' spacing={6}>
			<SectionHeading heading=' a little about me...' />
			<p>
				Hi, I am a web developer from Edmonton, Canada, with a passion for all
				Javascript realted things. I have experience working with Javascript
				front and backend technologies: MongoDB, ExpressJs, ReactJs, and NodeJs.
				I love solving real world problems and try to base my side projects on
				the ideas that I come across based on daily needs. I spend most of my
				time learning and building. Apart from this, my interests are reading
				history, watching films, and going on long walks with my dog.
			</p>
		</VStack>
	);
};

export default AboutMeSection;
