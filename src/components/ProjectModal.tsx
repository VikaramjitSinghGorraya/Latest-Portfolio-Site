import React from 'react';
import {
	Modal,
	ModalOverlay,
	ModalContent,
	ModalFooter,
	ModalBody,
	useDisclosure,
	Button,
	Image,
	Box,
	Link,
	VStack,
	Heading,
	Text,
	useColorMode,
} from '@chakra-ui/react';
import { motion } from 'framer-motion';
import { buttonAnimation } from './Animations';

const MotionButton = motion(Button);

const ProjectModal = ({
	toOpen,
	toClose,
	photo,
	title,
	description,
	liveLink,
}) => {
	const { onClose } = useDisclosure();
	const { colorMode } = useColorMode();
	return (
		<Box w='100%' maxH='50%'>
			<Modal
				isOpen={toOpen}
				onClose={onClose}
				scrollBehavior='inside'
				motionPreset='slideInBottom'
				size='xl'
			>
				<ModalOverlay />
				<ModalContent
					minW='70%'
					bg={colorMode === 'dark' ? 'brand.darkNavbar' : 'white'}
				>
					<ModalBody>
						<VStack
							w='100%'
							textAlign='justify'
							className='projectModal'
							spacing={5}
						>
							<Image src={photo} />
							<Heading variant='sectionHeading' alignSelf='flex-start'>
								{title}
							</Heading>
							<Link href={liveLink} isExternal w='100%'>
								<MotionButton {...buttonAnimation} variant='dark' w='100%'>
									VISIT WEBSITE
								</MotionButton>
							</Link>
							<Text as='p'>{description}</Text>
						</VStack>
					</ModalBody>

					<ModalFooter w='100%' m='auto'>
						<MotionButton
							variant='base'
							minW='100%'
							mr={3}
							color='#0244be'
							onClick={() => toClose(false)}
						>
							CLOSE
						</MotionButton>
					</ModalFooter>
				</ModalContent>
			</Modal>
		</Box>
	);
};

export default ProjectModal;
