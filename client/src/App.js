import React, { useState, useEffect } from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
	const [users, setUsers] = useState([]);

	const getUsers = async () => {
		const data = await fetch('/user');
		const users = await data.json();
		setUsers(users.data);
	};

	useEffect(() => {
		getUsers();
		return () => {};
	}, []);

	return (
		<div className="App">
			<header className="App-header">
				<img src={logo} className="App-logo" alt="logo" />
				<p>Welcome to my chat made it with Express and ReactJs! :D</p>
				<h3>Users:</h3>
				<ul>
					{users &&
						users.map((user) => {
							return <li key={user._id}>{user.name}</li>;
						})}
				</ul>
			</header>
		</div>
	);
}

export default App;
