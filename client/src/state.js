import { proxy } from 'valtio';

const state = proxy({
	users: [],
	currentUserId: '',
	userChats: [],
});

export { state };
