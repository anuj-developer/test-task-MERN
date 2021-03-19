import React, { Fragment, useEffect, useState } from 'react';

import Feed from './components/Feed';
import LoginForm from './components/LoginForm';
import { APIInstance } from './utils/axiosInstance';
import 'bootstrap/dist/css/bootstrap.min.css';

const App = () => {
	const [{ email, message, data, search, isLoading }, setState] = useState({
		email: '',
		message: '',
		search: '',
		data: [],
		isLoading: false,
	});

	const saveUser = async (email, message) => {
		return await APIInstance.post('/users', { email, message });
	};

	const getUsers = async (search) => {
		const { data } = await APIInstance.get(`/users?search=${search}`);
		return data?.data;
	};

	useEffect(() => {
		const fetchGetUsers = async () => {
			setState((prevState) => ({ ...prevState, isLoading: true }));
			const data = await getUsers(search);
			data &&
				setState((prevState) => ({ ...prevState, data, isLoading: false }));
		};
		fetchGetUsers();
	}, [search]);

	const handleChange = (event) => {
		event.preventDefault();
		const { name, value } = event.target;
		setState((prevState) => ({ ...prevState, [name]: value }));
	};

	const handleSubmit = async (event) => {
		event.preventDefault();
		let obj = {};
		obj.email = email;
		obj.message = message;

		await saveUser(email, message);
		setState((prevState) => ({ ...prevState, isLoading: true }));
		const data = await getUsers('');
		data && setState((prevState) => ({ ...prevState, isLoading: false }));
		setState((prevState) => ({
			...prevState,
			data,
			email: '',
			message: '',
		}));
	};

	return (
		<Fragment>
			<LoginForm
				onChange={handleChange}
				onSubmit={handleSubmit}
				state={{ email, message, search, data, isLoading }}
			/>
			<Feed data={data} isLoading={isLoading} />
		</Fragment>
	);
};

export default App;
