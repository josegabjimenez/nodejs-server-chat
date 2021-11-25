const message = require('../components/message/network');
const user = require('../components/user/network');

const router = (server) => {
	server.use('/message', message);
	server.use('/user', user);
};

module.exports = router;
