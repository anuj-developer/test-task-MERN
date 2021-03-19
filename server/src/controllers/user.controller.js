import userModel from '../models/user.model';
import userService from '../mongoServices/user.services';

const signup = async (req, res) => {
	try {
		const { body } = req;
		const { email } = body;
		if (!email) {
			throw new Error('Please Enter Email');
		}
		if (!body.message) {
			throw new Error('Please Enter Message');
		}
		let message = 'Saved Successfully.',
			data = {
				email,
				message: body.message,
			};

		// Save User into DB
		const user = new userModel(data);
		const saveUser = await user.save();

		if (!saveUser) throw new Error('Error While Saving');
		saveUser &&
			res.status(200).send({
				success: true,
				message,
			});
	} catch (error) {
		res.status(400).send({
			success: false,
			message: error.message || error,
		});
	}
};

const getAllUsers = async (req, res) => {
	try {
		const { query } = req;
		const { totalCount, users } = await userService.findAllQuery(query);

		res.status(200).send({
			success: true,
			data: users,
			totalCount,
		});
	} catch (error) {
		res.status(400).send({
			success: false,
			message: error.message,
		});
	}
};

export default {
	signup,
	getAllUsers,
};
