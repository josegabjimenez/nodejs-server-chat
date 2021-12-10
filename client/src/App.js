import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import UserChats from './pages/UserChats';
import Chat from './pages/Chat';
import './App.css';

function App() {
	return (
		<BrowserRouter>
			<Routes>
				<Route path="/" element={<Home />} />
				<Route path="/user" element={<UserChats />} />
				<Route path="/chat" element={<Chat />} />
			</Routes>
		</BrowserRouter>
	);
}

export default App;
