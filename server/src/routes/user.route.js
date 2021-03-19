import express from 'express';
import userController from '../controllers/user.controller';

export default express
	.Router()
	.post('/', userController.signup)
	.get('/', userController.getAllUsers);
