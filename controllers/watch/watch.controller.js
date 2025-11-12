const { readDB, writeDB } = require('../../database/db');

exports.getAllWatches = async (req, res, next) => {
    try {
        const watches = await readDB();
        res.status(200).json(watches);
    }
    catch (err) {
        next(err);
    }
}