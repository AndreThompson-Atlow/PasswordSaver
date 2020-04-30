import React, { useState } from 'react';

const SavedPassword = ({ site, login, password }) => {
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
		// Do Stuff
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

export default SavedPassword;
