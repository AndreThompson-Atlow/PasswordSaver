import React, { useState } from 'react';
import { deleteAccount } from '../../actions/account';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

const SavedPassword = ({
	site,
	login,
	password,
	keyValue,
	id,
	deleteAccount,
}) => {
	const [localPassword, setLocalPassword] = useState('******************');
	function copyPassword(passToCopy) {
		navigator.clipboard.writeText(passToCopy).then(
			function () {
				/* clipboard successfully set */
			},
			function () {
				/* clipboard write failed */
			}
		);
	}

	function deletePassword() {
		deleteAccount(keyValue);
	}

	function hideReveal() {
		if (localPassword == '******************') {
			setLocalPassword(password);
		} else {
			setLocalPassword('******************');
		}
	}

	return (
		<tr>
			<td>{site}</td>
			<td>{login}</td>
			<td>{localPassword}</td>
			<td>
				{localPassword === password ? (
					<button
						onClick={(e) => {
							hideReveal();
						}}
						className='far fa-eye-slash text-blue-500 ml-3 p-2 hover:bg-gray-300'
					></button>
				) : (
					<button
						onClick={(e) => {
							hideReveal();
						}}
						className='far fa-eye text-blue-500 ml-3 p-2 hover:bg-gray-300'
					></button>
				)}
				<button
					onClick={(e) => {
						copyPassword(password);
					}}
					className='far fa-copy text-blue-500 ml-1 p-2 hover:bg-gray-300'
				></button>
				<button
					onClick={(e) => {
						deletePassword();
					}}
					className='fas fa-minus-circle text-red-500 ml-1 p-2 hover:bg-gray-300'
				></button>
			</td>
		</tr>
	);
};

SavedPassword.propTypes = {
	deleteAccount: PropTypes.func.isRequired,
};

export default connect(null, { deleteAccount })(SavedPassword);
