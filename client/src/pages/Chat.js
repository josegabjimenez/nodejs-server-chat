import React, { useState, useEffect, useRef } from 'react';
import { Navigate } from 'react-router-dom';
// SocketIO
import { io } from 'socket.io-client';

// Components
import { GoBackButton } from '../components';

// State
import { state } from '../state';
import { useSnapshot } from 'valtio';

const socket = io();

const Chat = () => {
	const snap = useSnapshot(state);
	const [chatInfo, setChatInfo] = useState();
	const [chatMessages, setChatMessages] = useState([]);
	const [messageToSend, setMessageToSend] = useState('');

	const messagesEnd = useRef();

	// Scroll to the bottom of the messages
	const scrollToBottom = () => {
		if (snap.currentUserId && snap.currentChatId) {
			messagesEnd.current.scrollIntoView({ behavior: 'smooth' });
		}
	};

	// Send a message when the user press the Enter key
	const handleEnter = (e) => {
		if (e.keyCode === 13) {
			//// console.log('Enter pressed');
			sendMessage();
		}
	};

	// Get all the data from the chat
	const getChat = async (id) => {
		setChatMessages([]);
		const chatInfo = await (await fetch(`/api/chat/${id}`)).json();
		setChatInfo(chatInfo.data[0]);
		const chatMessages = await (await fetch(`/api/message?chat=${id}`)).json();
		setChatMessages(chatMessages.data);
	};

	// Functions to send a message
	const handleChange = (e) => {
		setMessageToSend(e.target.value);
	};

	const sendMessage = async () => {
		if (messageToSend) {
			const fullMessage = {
				chat: snap.currentChatId,
				user: snap.currentUserId,
				message: messageToSend,
			};

			await fetch('/api/message', {
				method: 'POST',
				headers: {
					'Content-Type': 'application/json; charset=UTF-8',
				},
				body: JSON.stringify(fullMessage),
			});
			setMessageToSend('');
		}
	};

	useEffect(() => {
		// Get Chats
		const id = snap.currentChatId;
		getChat(id);

		// Listen for new messages
		socket.on(`${id}`, (data) => {
			setChatMessages((prevArray) => [...prevArray, data]);
		});
	}, [snap.currentChatId]);

	useEffect(() => {
		// Scroll to the bottom view
		scrollToBottom();
	}, [chatMessages]);

	// Redirection
	if (!snap.currentUserId) {
		return <Navigate to="/" />;
	}

	if (!snap.currentChatId) {
		return <Navigate to="/user" />;
	}

	return (
		<main className="w-full min-h-screen flex justify-center items-center md:text-2xl">
			<section className="card shadow rounded-none bg-white w-full md:w-4/5 md:rounded-2xl md:my-4 lg:px-12">
				<div className="card-body ">
					<GoBackButton />
					<h2 className="card-title">
						{chatInfo
							? chatInfo.users[0]._id === snap.currentUserId
								? chatInfo.users[1].name
								: chatInfo.users[0].name
							: null}
					</h2>
					{chatMessages &&
						chatMessages.map((message) => {
							return (
								<Message
									key={message._id}
									user={message.user.name}
									text={message.message}
									direction={
										message.user._id === snap.currentUserId ? 'right' : 'left'
									}
								/>
							);
						})}
					<TextInput
						value={messageToSend}
						onChange={(e) => handleChange(e)}
						onClick={() => sendMessage()}
						onKeyDown={(e) => handleEnter(e)}
					/>
				</div>
				<div ref={messagesEnd}></div>
			</section>
		</main>
	);
};

const Message = ({ user, text, direction }) => {
	if (direction === 'left') {
		return (
			<div
				style={{ width: 'fit-content' }}
				className="card shadow my-3 bg-base-100 "
			>
				<div className="card-body p-4 ">
					<h2 className="card-title md:text-2xl">{user}</h2>
					<p>{text}</p>
				</div>
			</div>
		);
	}

	return (
		<div
			style={{ width: 'fit-content' }}
			className="card shadow my-3 w-auto bg-primary md:w-1/2 self-end"
		>
			<div className="card-body text-right md:text-left p-4">
				<h2 className="card-title md:text-2xl">{user}</h2>
				<p>{text}</p>
			</div>
		</div>
	);
};

const TextInput = ({ onChange, onClick, value, onKeyDown }) => {
	return (
		<div className="form-control mt-8 ">
			<div className="flex space-x-2 ">
				<input
					type="text"
					value={value}
					onChange={onChange}
					onKeyDown={onKeyDown}
					placeholder="Write something..."
					className="w-full input input-primary input-bordered md:text-2xl md:h-20 md:p-10 "
				/>
				<button
					className="btn btn-neutral md:w-64 md:h-20 md:text-2xl"
					onClick={onClick}
				>
					Send
				</button>
			</div>
		</div>
	);
};

export default Chat;
