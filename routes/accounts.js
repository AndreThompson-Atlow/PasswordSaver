const express = require('express');
const router = express.Router();
const bcrypt = require('bcryptjs');
const auth = require('../middleware/auth');
const jwt = require('jsonwebtoken');
const config = require('config');
const { check, validationResult } = require('express-validator');

const Account = require('../models/Account');

// @route       GET api/accounts
// @desc        Get all of a users stored passwords/accounts
// @access      Private
router.get('/', auth, async (req, res) => {
	try {
		const user = await User.findById(req.user.id);
		const accounts = user.accounts;
		res.json(accounts);
	} catch (err) {
		console.error(err.message);
		res.status(500).send('Server Error');
	}
});

// @route 		DELETE api/accounts:id
// @desc		Remove an account from the accounts list.
// @access		Private
router.delete('/:key', auth, async (req, res) => {
	try {
		const user = await User.findById(req.user.id);
		const index = req.params.key;
		user.accounts.splice(index, 1);
		user.save();
		const accounts = user.accounts;

		res.json(accounts);
	} catch (err) {
		// console.error(err.message);
		res.status(500).send('Server Error');
	}
});
// @route       POST api/accounts
// @desc        Add an account to a users password list
// @access      Private
router.post(
	'/',
	[
		auth,
		[
			check('login', 'You must keep a record of the login information')
				.not()
				.isEmpty(),
			check(
				'site',
				'You must log what website/application the password is being saved for'
			)
				.not()
				.isEmpty(),
			check('password', 'Must include a password to be saved'),
		],
	],
	async (req, res) => {
		const errors = validationResult(req);
		if (!errors.isEmpty()) {
			return res.status(400).json({ errors: errors.array() });
		}

		const { login, site, password } = req.body;

		try {
			const user = await User.findById(req.user.id).select('-password');
			const account = new Account({
				login,
				site,
				password,
				user,
			});
			user.accounts.push(account);
			user.save();
			const accounts = user.accounts;
			res.json(accounts);
		} catch (err) {
			console.error(err.message);
			res.status(500).send('Server Error');
		}
	}
);

module.exports = router;
