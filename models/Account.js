const mongoose = require('mongoose');

const AccountSchema = new mongoose.Schema({
	login: {
		type: String,
		require: true,
	},
	password: {
		type: String,
		require: true,
	},
	site: {
		type: String,
		require: true,
	},
});

module.exports = Account = mongoose.model('account', AccountSchema);
