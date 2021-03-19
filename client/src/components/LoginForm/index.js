import React from 'react';
import { Container, Form, FormGroup, Button } from 'react-bootstrap';
import InputComponent from '../InputComponent';

const LoginForm = ({ state, onChange, onSubmit }) => {
	return (
		<Container>
			<div
				style={{
					width: '30vw',
					margin: '0 auto',
					padding: '50px',
					height: '250px',
					background: 'gray',
					marginTop: '25px',
				}}
			>
				<Form onSubmit={onSubmit}>
					<FormGroup>
						<InputComponent
							onChange={onChange}
							value={state.email}
							name={'email'}
							placeholder="Email"
							type="email"
						/>
					</FormGroup>
					<FormGroup>
						<Form.Control
							as="textarea"
							rows={3}
							required
							name={'message'}
							value={state.message}
							onChange={onChange}
							placeholder="Message"
						/>
					</FormGroup>
					<FormGroup>
						<Button type="submit" color="primary" style={{ float: 'right' }}>
							Submit
						</Button>
					</FormGroup>
				</Form>
			</div>
			<div
				style={{
					width: '30vw',
					margin: '0 auto',
					marginTop: '20px ',
				}}
			>
				<FormGroup>
					<InputComponent
						onChange={onChange}
						value={state.search}
						name={'search'}
						placeholder="Filter"
						type="text"
					/>
				</FormGroup>
			</div>
		</Container>
	);
};

export default LoginForm;
