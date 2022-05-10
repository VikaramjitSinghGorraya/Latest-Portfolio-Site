import React from 'react';
import { Box, Heading, HStack } from '@chakra-ui/react';

const PageHeading = ({ pageHeading, HeadingIcon }) => {
	return (
		<HStack minW='100%' justifyContent='space-between'>
			<Heading w='100%' variant='largePageHeading' wordBreak='break-word'>
				{pageHeading}
			</Heading>
			<Box h={['auto', '200px']} w='auto' alignSelf='flex-end'>
				{HeadingIcon}
			</Box>
		</HStack>
	);
};

export default PageHeading;
