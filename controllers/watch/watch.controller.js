const { readDB, writeDB } = require('../../database/db');

exports.getAllWatches = async (req, res, next) => {
    try {
        const watches = await readDB();
        if (!watches || watches.length === 0) {
            return res.status(200).json({
                success: true,
                message: "No watches available",
                data: null
            });
        }

        return res.status(200).json({
            success: true,
            message: "All watches are retrieved",
            data: watches
        })
    }
    catch (err) {
        next(err);
    }
}

exports.getWatchByModel = async (req, res, next) => {
    try {
        const model = req.params.model;
        const watches = await readDB();
        const filteredWatches = watches.filter(watch => watch.modelNumber === model);

        if (filteredWatches.length === 0) {
            return res.status(404).json({
                success: false,
                message: `No watch found with model: ${model}`,
                data: null
            });
        }

        return res.status(200).json({
            success: true,
            message: "Watch retrieved successfully",
            data: filteredWatches
        });
    } catch (error) {
        next(error);
    }
}

exports.createWatch = async (req, res, next) => {
    try {
        const newWatch = req.body;
        const watches = await readDB();

        // Check if the watch with the same model number already exists
        const existingWatch = watches.find(watch => watch.modelNumber === newWatch.modelNumber);
        if (existingWatch) {
            return res.status(400).json({
                success: false,
                message: `Watch with model number ${newWatch.modelNumber} already exists`,
                data: null
            });
        }

        // Add the new watch to the database
        watches.push(newWatch);
        await writeDB(watches);

        return res.status(201).json({
            success: true,
            message: "Watch created successfully",
            data: newWatch
        });
    } catch (error) {
        next(error);
    }
}

exports.deleteWatch = async (req, res, next) => {
    try {
        const { model } = req.params;

        const watches = await readDB();
        const existsWatch = watches.find(watch => watch.modelNumber === model);
        if (!existsWatch) {
            return res.status(404).json({
                success: true,
                message: "Watch is not found",
                data: null
            })
        }

        const watchIndex = watches.findIndex(watch => watch.modelNumber === model);
        watches.splice(watchIndex, 1);
        await writeDB(watches);
        return res.status(200).json({
            success: true,
            message: "Watch is deleted successfully",
            data: null
        });
    } catch (error) {
        next(error);
    }
}