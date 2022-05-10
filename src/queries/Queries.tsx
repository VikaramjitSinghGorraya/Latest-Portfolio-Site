import axios from 'axios';
import { useQuery, useMutation } from 'react-query';

//---------------PROJECT QUERIES-----------------------------
export const getProjectPhoto = async (projectId: string) => {
	const photo = await axios.get(
		`${process.env.REACT_APP_BACKENDURL}/api/${projectId}/getProjectPhoto`
	);
	return photo.config.url;
};

export const getAllProjects = async () => {
	const postsRetrieved = await axios.get(
		`${process.env.REACT_APP_BACKENDURL}/api/getProjects`
	);
	return postsRetrieved;
};

export const useGetProjects = () => {
	return useQuery(['allProjects'], () => getAllProjects(), {
		refetchOnWindowFocus: false,
		retry: false,
	});
};

export const useGetProjectPhoto = (projectId) => {
	return useQuery(
		[`projectPhoto-${projectId}`],
		() => getProjectPhoto(projectId),
		{
			enabled: !!projectId,
			retry: false,
			refetchOnWindowFocus: false,
		}
	);
};

//---------------CONTACT FORM QUERIES----------
export const contactUser = async (message) => {
	const contactUser = await axios.post(
		`${process.env.REACT_APP_BACKENDURL}/api/contact`,
		message
	);
	return contactUser;
};

export const useContactUser = () => {
	return useMutation(
		[`contactUser`],
		(message: { name: string; email: string; message: string }) =>
			contactUser(message),
		{
			retry: false,
		}
	);
};
