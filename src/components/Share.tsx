import React from 'react';
import { Link } from '@chakra-ui/react';
import { RWebShare } from 'react-web-share';

const Share = () => {
	return (
		<RWebShare
			data={{
				text: "Checkout this developer's portfolio site. Looks good, click on the link below.",
				url: 'http://vikaramjitsingh.com',
				title: "Vikaramjit Singh's Portfolio Site",
			}}
		>
			<Link>SHARE</Link>
		</RWebShare>
	);
};

export default Share;
