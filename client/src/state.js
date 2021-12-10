import { proxy } from 'valtio';

const state = proxy({
	users: [],
	userChats: [],
	currentUserId: '',
	currentChatId: '',
});

export { state };
