const express = require('express');
const router = express.Router();

const watchController = require('../../controllers/watch/watch.controller');

// Route to get all watches, base routes: api/watches
router.get('/', watchController.getAllWatches);

// Route: /api/watches/:model
router.get('/:model', watchController.getWatchByModel);

// Create a new watch
router.post('/create-watch-model', watchController.createWatch);

// Delete a watch by model number
router.delete('/delete-watch-model/:model', watchController.deleteWatch);


module.exports = router;