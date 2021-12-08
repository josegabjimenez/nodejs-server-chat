import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import UserChats from './pages/UserChats';
import './App.css';

function App() {
	return (
		<BrowserRouter>
			<Routes>
				<Route path="/" element={<Home />} />
				<Route path="/user" element={<UserChats />} />
			</Routes>
		</BrowserRouter>
	);
}

export default App;
