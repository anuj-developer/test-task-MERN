import React from 'react';
import { Spinner } from 'react-bootstrap';

export const LoadingSpinner = ({ animation, variant }) => {
	return (
		<div>
			<Spinner animation={animation} variant={variant} />
		</div>
	);
};
