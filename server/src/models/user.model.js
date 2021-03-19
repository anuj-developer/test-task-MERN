import { Schema, model } from 'mongoose';

const userSchema = new Schema(
	{
		message: { type: String },
		email: { type: String, index: true },
	},
	{ timestamps: true, versionKey: false },
);

const User = new model('User', userSchema);

export default User;
