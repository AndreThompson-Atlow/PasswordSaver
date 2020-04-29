import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

const Alert = ({ alerts }) =>
	alerts !== null &&
	alerts.length > 0 &&
	alerts.map((alert) => (
		<div
			key={alert.id}
			className='max-w-sm mx-auto w-full bg-blue-400 shadow-lg rounded-lg pointer-events-auto'
		>
			<div className='rounded-lg shadow-xs overflow-hidden'>
				<div className='p-4'>
					<div className='flex items-center'>
						<div className='w-0 flex-1 flex justify-between'>
							<p className='w-0 flex-1 text-sm leading-5 font-medium text-gray-900'>
								{alert.msg}
							</p>
						</div>
						<div className='ml-4 flex-shrink-0 flex'></div>
					</div>
				</div>
			</div>
		</div>
	));

Alert.propTypes = {
	alerts: PropTypes.array.isRequired,
};

const mapStateToProps = (state) => ({
	alerts: state.alert,
});

export default connect(mapStateToProps)(Alert);
