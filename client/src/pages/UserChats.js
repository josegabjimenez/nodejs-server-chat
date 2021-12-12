import React, { useEffect } from 'react';
import { Navigate } from 'react-router-dom';
// Components
import { Hero, Card, CardGrid, GoBackButton } from '../components';

// State
import { state } from '../state';
import { useSnapshot } from 'valtio';

const UserChats = () => {
	const snap = useSnapshot(state);

	// Get all the chats that an user has
	const getChats = async (id) => {
		state.userChats = [];
		const chats = await (await fetch(`/api/chat/${id}`)).json();
		state.userChats = chats.data;
	};

	useEffect(() => {
		const id = snap.currentUserId;
		getChats(id);
	}, [snap.currentUserId]);

	// Redirection
	if (!snap.currentUserId) {
		return <Navigate to="/" />;
	}

	return (
		<Hero>
			<GoBackButton />
			<CardGrid>
				{snap.userChats &&
					snap.userChats.map((chat) => {
						return (
							<Card
								key={chat._id}
								id={chat._id}
								button="Let's chat"
								route="chat"
								title={`Chat with ${
									chat.users[0]._id === snap.currentUserId
										? chat.users[1].name
										: chat.users[0].name
								}`}
							/>
						);
					})}
			</CardGrid>
		</Hero>
	);
};

export default UserChats;
