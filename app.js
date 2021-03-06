const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const morgan = require('morgan');
const tracker = require('./routes/tracker');
//
const app = express();

// Mongoose
const uri = 'mongodb+srv://AuthAPi:tanvir786@cluster0-oyy5a.mongodb.net/test?retryWrites=true';
const options = {
	reconnectTries: Number.MAX_VALUE,
	poolSize: 10,
	useNewUrlParser: true,
};
mongoose
	.connect(uri)
	.then(result => {
		console.log(result);
	})
	.catch(err => {
		console.log(err);
	});

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(morgan('dev'));
app.use((req, res, next) => {
	res.header('Access-Control-Allow-Origin', '*');
	res.header(
		'Access-Control-Allow-Headers',
		'Origin, X-Requested-With, Content-Type, Accept, Authorization',
	);
	if (req.method === 'OPTIONS') {
		res.header('Access-Control-Allow-Methods', 'PUT, POST, PATCH, DELETE, GET');
		return res.status(200).json({});
	}
	next();
});

app.use('/api/tracker/', tracker);

app.use((req, res, next) => {
	const error = new Error('Not Found !');
	error.status = 404;
	next(error);
});

app.use((error, req, res, next) => {
	res.status(error.status || 500);
	res.json({
		error: {
			message: error.message,
		},
	});
});

module.exports = app;
