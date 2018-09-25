const LocationTracker = require('../model/trackerSchema');
exports.postTackingInfoFromDevice = (req, res, next) => {
	// res.send(req.body);
	const LocationTracker = new LocationTracker({
		_id: mongoose.Types.ObjectId(),
		deviceId: req.body.deviceId,
		latitude: req.body.latitude,
		longitude: req.body.longitude,
		accuracy: req.body.accuracy,
	});
	LocationTracker.save()
		.then(result => {
			res.status(200).json({
				response: result,
			});
		})
		.catch(err => {
			console.log(err);
		});
};
