const express = require('express');
const router = express.Router();

router.get('/', (req, res, next) => {
    try {
        console.log("watch order router is working fine.")
    }
    catch(error) {
        next(error);
    }
})

module.exports = router;