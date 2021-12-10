import React from 'react';
import { Link } from 'react-router-dom';
import { state } from '../state';

const Card = ({ id, title, email, button, route }) => {
	const setCurrentUser = (id) => {
		state.currentUserId = id;
	};

	const setCurrentChat = (id) => {
		state.currentChatId = id;
	};

	return (
		<div className="card text-center shadow-md bg-white">
			<figure className="px-2 pt-2">
				<img
					alt="Profile"
					src="https://picsum.photos/id/1005/400/250"
					className="rounded-xl"
				/>
			</figure>
			<div className="card-body">
				<h2 className="card-title">{title}</h2>
				<p>{email}</p>
				<div className="justify-center card-actions">
					<Link
						to={`/${route}`}
						className="btn btn-outline border-2 btn-primary btn-block"
						onClick={() =>
							route === 'user' ? setCurrentUser(id) : setCurrentChat(id)
						}
					>
						{button}
					</Link>
				</div>
			</div>
		</div>
	);
};

export default Card;
