import React from 'react';

const SavedPassword = ({ site, login, password }) => {
	return (
		<tr>
			<td>{site}</td>
			<td>{login}</td>
			<td>{password}</td>
			<td>
				<i className='far fa-eye text-blue-500 ml-3 p-2 hover:bg-gray-300'></i>
				<i className='far fa-copy text-blue-500 ml-1 p-2 hover:bg-gray-300'></i>
				<i class='fas fa-minus-circle text-red-500 ml-1 p-2 hover:bg-gray-300'></i>
			</td>
		</tr>
	);
};

export default SavedPassword;
