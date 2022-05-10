import React, { useState } from 'react';
import { HStack, Box, Center, Heading, Skeleton } from '@chakra-ui/react';
import { motion } from 'framer-motion';
import { useGetProjectPhoto } from '../queries/Queries';
import { ProjectCardInfo } from '../types/ProjectCard';
import ProjectModal from './ProjectModal';
import { buttonAnimation } from './Animations';

const MotionHStack = motion(HStack);
const ProjectCard = ({
	projectId,
	title,
	description,
	liveLink,
}: ProjectCardInfo) => {
	const colors = [
		'linear-gradient(354deg, rgba(14, 145, 118, 0.95) 0%, rgba(238, 255, 89, 0.9) 100%)',
		'linear-gradient(354deg, rgba(0, 122, 192, 0.95) 0%, rgba(166, 255, 245, 0.9) 100%)',
		'linear-gradient(354deg, rgba(247, 107, 28, 0.95) 0%, rgba(250, 221, 115, 0.9) 100%)',
	];

	const [showProjectModal, setShowProjectModal] = useState(false);
	const { isLoading: photoLoading, data: photoData } =
		useGetProjectPhoto(projectId);

	const projectModalCloseHandler = () => {
		setShowProjectModal(false);
	};

	const showSignoutOption = () => {
		return (
			<Box zIndex={99}>
				<ProjectModal
					toOpen={showProjectModal}
					toClose={projectModalCloseHandler}
					photo={photoData}
					title={title}
					description={description}
					liveLink={liveLink}
				/>
			</Box>
		);
	};
	return (
		<Skeleton
			h={['6rem', '7rem', '9rem', '10rem']}
			w={['48%', '48%', '48%', '32.5%']}
			isLoaded={!photoLoading}
			my='2'
		>
			<MotionHStack
				as='button'
				{...buttonAnimation}
				h='100%'
				w='100%'
				pos='relative'
				bg='linear-gradient(354deg, rgba(14, 145, 118, 0.95) 0%, rgba(238, 255, 89, 0.9) 100%)'
				backgroundImage={photoData}
				backgroundSize='cover'
				backgroundRepeat='no-repeat'
				borderRadius='8px'
				onClick={() => setShowProjectModal(true)}
			>
				<Box
					pos='absolute'
					w='100%'
					h='100%'
					backgroundColor='transparent'
					background={colors[Math.floor(Math.random() * 3) + 0]}
					borderRadius='8px'
				></Box>

				<Center as='h2' w='100%' zIndex='1' color='white'>
					<Heading variant='sectionHeading'>{title}</Heading>
				</Center>
				{showSignoutOption()}
			</MotionHStack>
		</Skeleton>
	);
};

export default ProjectCard;
