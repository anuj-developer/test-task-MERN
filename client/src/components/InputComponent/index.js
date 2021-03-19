import React from 'react';
import { Form } from 'react-bootstrap';

const InputComponent = (props) => {
	return (
		<Form.Control
			type={props.type}
			required
			onChange={props.onChange}
			value={props.value}
			name={props.name}
			placeholder={props.placeholder}
		/>
	);
};

export default InputComponent;
