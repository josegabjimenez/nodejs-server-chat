import { proxy } from 'valtio';

const state = proxy({
	users: [],
	currentUserId: 'Pepito',
});

export { state };
