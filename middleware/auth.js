const jwt = require('jsonwebtoken');
const config = require('config');

module.exports = function (req, res, next) {
	const token = req.header('x-auth-token');
	if (!token) {
		console.log('No Token');
		return res
			.status(401)
			.json({ msg: 'A token is required to access this route' });
	}
	try {
		jwt.verify(token, config.get('jwtSecret'), (error, decoded) => {
			if (error) {
				console.log('Invalid Token');
				res.status(401).json({ msg: 'Token is not valid' });
			} else {
				req.user = decoded.user;
				next();
			}
		});
	} catch (err) {
		console.error('There was an error from the AUTH middleware.');
		res.status(500).json({ msg: 'Server Error' });
	}
};
