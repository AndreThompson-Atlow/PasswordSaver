import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

const Alert = ({ alerts }) =>
	alerts !== null &&
	alerts.length > 0 &&
	alerts.map((alert) => (
		<div
			key={alert.id}
			class='max-w-sm mx-auto w-full bg-red-600 shadow-lg rounded-lg pointer-events-auto'
		>
			<div class='rounded-lg shadow-xs overflow-hidden'>
				<div class='p-4'>
					<div class='flex items-center'>
						<div class='w-0 flex-1 flex justify-between'>
							<p class='w-0 flex-1 text-sm leading-5 font-medium text-gray-900'>
								{alert.msg}
							</p>
						</div>
						<div class='ml-4 flex-shrink-0 flex'></div>
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
