const mongoose = require('mongoose');

const UserSchema = new mongoose.Schema({
	email: {
		type: String,
		require: true,
		unique: true,
	},
	password: {
		type: String,
		required: true,
	},
	accounts: {
		type: Array,
	},
});

module.exports = User = mongoose.model('user', UserSchema);
