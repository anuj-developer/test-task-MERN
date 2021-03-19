import express, { json, urlencoded } from 'express';
import cors from 'cors';
import morgan from 'morgan';
import helmet from 'helmet';
import ip from 'ip';
import compression from 'compression';
import { greenBright, cyanBright } from 'chalk';
import './src/config/dbConnection';
import userRoute from './src/routes/user.route';

require('dotenv').config({ path: 'src/config/.env' });
const server = express();

const PORT = process.env.PORT || 3000;
const HOST = process.env.HOST || 'localhost';

/** Parse Req.body */
server.use(json());
server.use(urlencoded({ extended: true }));
/** CORS */
server.use(cors({ origin: true, credentials: true }));
/** API LOG */
server.use(morgan('dev'));
/** XSS Attack Security */
server.use(helmet());
/** Compress Requests */
server.use(compression());

const BASE_API_URL = `http://${HOST}:${PORT}/api/v1/`;
const NETWORK_BASE_API_URL = `http://${ip.address()}:${PORT}/api/v1/`;

server.get('/api/v1', (req, res) => {
	res.status(200).send({ success: true, message: 'Welcome to NodeJS API' });
});

server.use('/api/v1/users', userRoute);
server.listen(PORT, () => {
	console.info(cyanBright('API Running at'));
	console.info(cyanBright(`${greenBright('\tLocalhost:')} ${BASE_API_URL}`));
	console.info(cyanBright(`${greenBright('\tLAN:')} ${NETWORK_BASE_API_URL}`));
});
