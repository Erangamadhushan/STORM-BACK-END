const express = require('express');
const router = express.Router();

const watchController = require('../../controllers/watch/watch.controller');

// Route to get all watches, base routes: api/watches
router.get('/', watchController.getAllWatches);

// Route: /api/watches/model/:modelNumber
router.get('/model/:modelNumber', watchController.getWatchByModel);

// Route: /api/watches/:type
router.get('/:type', watchController.getWatchesByType);

// Create a new watch
router.post('/create-watch-model', watchController.createWatch);

// Delete a watch by model number
router.delete('/delete-watch-model/:model', watchController.deleteWatch);

// Update watch details
router.patch('/update-watch-model/:modelNumber', watchController.updateWatch);


module.exports = router;