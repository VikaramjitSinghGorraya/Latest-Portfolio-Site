import React from 'react';
import { VStack, Flex } from '@chakra-ui/react';
import { useGetProjects } from '../queries/Queries';
import ProjectCard from './ProjectCard';
import SectionHeading from './SectionHeading';

const ProjectSection = () => {
	const { data: projectsData } = useGetProjects();

	return (
		<VStack w='100%' alignItems='flex-start' spacing={6}>
			<SectionHeading heading='some projects' />
			<Flex
				w='100%'
				justifyContent={['space-between ', 'space-between']}
				alignItems='flex-start'
				flexWrap='wrap'
			>
				{projectsData?.data.projects.map((project, index) => (
					<ProjectCard
						key={index}
						projectId={project._id}
						title={project.title}
						description={project.description}
						liveLink={project.liveLink}
					/>
				))}
			</Flex>
		</VStack>
	);
};

export default ProjectSection;
