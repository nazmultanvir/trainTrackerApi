const express = require('express');
const mongoose = require('mongoose');
const router = express.Router();
const LocationTracker = require('../model/trackerSchema');
// const trackingController = require('../controller/trackinController');

// getTrackingInfo
router.post('/', (req, res, next) => {
	const locationTracker = new LocationTracker({
		_id: mongoose.Types.ObjectId(),
		deviceId: req.body.deviceId,
		latitude: req.body.latitude,
		longitude: req.body.longitude,
		accuracy: req.body.accuracy,
	});
	locationTracker
		.save()
		.then(result => {
			res.status(200).json({
				response: result,
			});
		})
		.catch(err => {
			console.log(err);
		});
});
router.get('/view', (req, res, next) => {
	LocationTracker.find({})
		.then(result => {
			res.status(200).json({
				response: result,
			});
		})
		.catch(err => {
			console.log(err);
		});
});

module.exports = router;
