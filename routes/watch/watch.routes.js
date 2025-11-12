const express = require('express');
const router = express.Router();

const watchController = require('../../controllers/watch/watch.controller');

// Route to get all watches
// base routes: api/watches
router.get('/', watchController.getAllWatches);

module.exports = router;