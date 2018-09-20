const express = require('express');
const router = express.Router();
const trackingController = require('../controller/trackinController');

// getTrackingInfo
router.post('/postTrackingInfoFromDevice', trackingController.postTackingInfoFromDevice);

module.exports = router;
