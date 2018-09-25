const mongoose = require('mongoose');

const LocationSchema = mongoose.Schema({
	_id: mongoose.Schema.Types.ObjectId,
	deviceId: String,
	latitude: Number,
	longitude: Number,
	accuracy: Number,
});

module.exports = mongoose.model('LocationTracker', LocationSchema);
