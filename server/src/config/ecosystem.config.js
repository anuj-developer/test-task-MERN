require('dotenv').config({ path: 'src/config/.env' });

module.exports = {
	apps: [
		{
			name: process.env.PROJECT_NAME,
			script: 'server.js',
			interpreter: 'babel-node',
			watch: false,
			env: {
				NODE_ENV: process.env.NODE_ENV,
			},
		},
	],
};
