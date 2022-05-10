import React, { useState } from 'react';
import {
	Flex,
	VStack,
	HStack,
	FormLabel,
	Input,
	FormControl,
	Textarea,
	Button,
	Box,
	Image,
} from '@chakra-ui/react';
import { motion } from 'framer-motion';
import MessageBox from './MessageBox';
import { useContactUser } from '../queries/Queries';
import { buttonAnimation } from './Animations';
import SectionHeading from './SectionHeading';
import Contacticon from '../icons/Contact.svg';
import NameIcon from '../icons/Name.svg';
import EmailIcon from '../icons/Email.svg';
import MessageIcon from '../icons/Message.svg';

const MotionButton = motion(Button);
const ContactSection = () => {
	const sendMessage = useContactUser();

	const [message, setMessage] = useState({
		email: '',
		name: '',
		message: '',
		inputCleared: false,
	});

	const inputChangeHandler = (e) => {
		setMessage({ ...message, [e.target.name]: e.target.value });
	};

	const submitHandler = (e) => {
		e.preventDefault();
		setMessage({ ...message, inputCleared: false });
		sendMessage.mutate(message);
	};

	const displaySuccessMessage = () => {
		if (!message.inputCleared) {
			setMessage({
				...message,
				name: '',
				email: '',
				message: '',
				inputCleared: true,
			});
		}
		return (
			<MessageBox
				toastId='success-id'
				title='Thanks for reaching out!!!'
				description={sendMessage.data}
				successStatus={true}
			/>
		);
	};

	const displayErrorMessage = () => {
		return (
			<MessageBox
				toastId='error-id'
				title='The following error occured.'
				description={sendMessage.error}
				successStatus={false}
			/>
		);
	};

	const displayContactImage = () => {
		return (
			<Box w={['100%', '100%', '100%', '30%']} h='30%'>
				<Image src={Contacticon} w='100%' h='auto' />
			</Box>
		);
	};

	const displayContactForm = () => {
		return (
			<VStack w={['100%', '100%', '100%', '60%']}>
				<form style={{ width: '100%' }} onSubmit={submitHandler}>
					<FormControl w='100%'>
						<VStack spacing={5} w='100%'>
							<VStack w='100%' alignItems='flex-start'>
								<HStack>
									<Image src={NameIcon} />
									<FormLabel>Name</FormLabel>
								</HStack>
								<Input
									name='name'
									onChange={inputChangeHandler}
									value={message.name}
									required
								/>
							</VStack>
							<VStack w='100%' alignItems='flex-start'>
								<HStack>
									<Image src={EmailIcon} />
									<FormLabel>Email</FormLabel>
								</HStack>
								<Input
									name='email'
									onChange={inputChangeHandler}
									value={message.email}
									required
								/>
							</VStack>
							<VStack w='100%' alignItems='flex-start'>
								<HStack>
									<Image src={MessageIcon} />
									<FormLabel>Message</FormLabel>
								</HStack>
								<Textarea
									name='message'
									onChange={inputChangeHandler}
									value={message.message}
									required
								/>
							</VStack>
							<MotionButton
								{...buttonAnimation}
								type='submit'
								isLoading={sendMessage.isLoading ? true : false}
								loadingText='SENDING...'
								variant='dark'
								w='100%'
							>
								SEND MESSAGE
							</MotionButton>
						</VStack>
					</FormControl>
				</form>
			</VStack>
		);
	};

	const contactSectionContent = () => {
		return (
			<Flex
				direction={['column', 'column', 'column', 'row']}
				alignItems='center'
				justifyContent='space-between'
				w='100%'
			>
				{displayContactImage()}
				{displayContactForm()}
			</Flex>
		);
	};
	return (
		<VStack alignItems='flex-start' w='100%' spacing={6}>
			<SectionHeading heading='contact me' />
			{contactSectionContent()}
			{sendMessage.isError && displayErrorMessage()}
			{sendMessage.isSuccess && displaySuccessMessage()}
		</VStack>
	);
};

export default ContactSection;
