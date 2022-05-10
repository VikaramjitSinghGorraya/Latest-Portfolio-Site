import React from 'react';
import { Heading } from '@chakra-ui/react';
const SectionHeading = ({ heading }) => {
	const wordsInSubHeading = heading.split(' ');

	return (
		<Heading variant='sectionHeading'>
			{wordsInSubHeading.map((word, index) =>
				wordsInSubHeading.length >= 3 && index === 3 ? (
					<span className='blueText'> {word} </span>
				) : wordsInSubHeading.length < 3 &&
				  index === wordsInSubHeading.length - 1 ? (
					<span className='blueText'> {word} </span>
				) : (
					word + ' '
				)
			)}
		</Heading>
	);
};

export default SectionHeading;
