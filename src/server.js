const express = require('express');
const expressJSDocSwagger = require('express-jsdoc-swagger');
const morgan = require('morgan');
const { swaggerJsDocOptions } = require('./utils/config/swagger-jsdoc');
const app = express();

switch (process.env.NODE_ENV) {
	case 'production':
		// In production, use the 'combined' format for more detailed logs
		app.use(morgan('combined'));
		console.log("NODE_ENV is set to production, so Morgan will log in 'combined' mode.")
		break;
	case 'dev':
		app.use(morgan('dev'));
		console.log("NODE_ENV is set to dev, so Morgan will log with dev formatting.");
		break;
	case 'test':
		// Do not use morgan, it pollutes the logs from Jest!
		console.log("NODE_ENV is set to test, so Morgan will be disabled.");
		break;
	default:
		// Don't use morgan unless it's in specific environments that we care about!
		console.log("NODE_ENV is not set to production, dev, or test, so Morgan will not be used for logging.")
		break;
}

expressJSDocSwagger(app)(swaggerJsDocOptions);



/** 
 * GET /
 * @summary Welcome message
 * @return {object} 200 - Welcome message
*/
app.get("/", (request, response) => {
	response.json({
		message: "Welcome to the Express Dice API"
	});
});

/** 
 * GET /health
 * @summary Health check endpoint
 * @return {object} 200 - Health status and timestamp
*/
app.get("/health", (request, response) => {
	response.json({
		status: "OK",
		timestamp: new Date().toISOString()
	});
});

const diceController = require('./controllers/DiceController');
app.use('/dice', diceController);

module.exports = {
	app
}