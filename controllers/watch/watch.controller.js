// Import my watch model
const Watch = require('../../models/watch/watch.model');

const ALLOWTYPES = ['analog', 'digital', 'semi-analog'];

exports.getAllWatches = async (req, res, next) => {

    try {
        const items = await Watch.find().lean();
        if (!items || items.length === 0) {
            return res.status(200).json({
                    success: true,
                    message: "No watches available",
                    data: null
                });
        }

        return res.status(200).json({
            success: true,
            message: "All watches are retrieved",
            data: items
        })
        
    } catch (error) {
        
    }
}

exports.getWatchByModel = async (req, res, next) => {
    try {
        const {modelNumber} = req.params;
        console.log(modelNumber);
        
        const watch = await Watch.find({modelNumber});

        if (!watch) {
            return res.status(400).json({
                success: false,
                message: `No watch found with model: ${modelNumber}`,
                data: null
            })
        }
        return res.status(200).json({
            success: true,
            message: "Watch retrieved successfully",
            data: watch
        })

        
    } catch (error) {
        next(error);
    }
}

exports.createWatch = async (req, res, next) => {
    try {
        const {modelNumber,imageURL, brand, countryOfOrigin, price, type} = req.body;
        

        const normalizedTypes = String(type).toLowerCase();
        console.log(normalizedTypes);

        // if(!ALLOWTYPES.includes(normalizedTypes)) {
        //     return res.status(400).json({
        //         success: false,
        //         message: 'Invalid type'
        //     })
        // }
        
        const existsWatch = await Watch.findOne({ modelNumber });

        if (existsWatch) {
            return res.status(400).json({
                success: false,
                message: "ModelNumber already exists"
            });
        }
   
        const newWatch = new Watch({
            modelNumber,
            imageURL, 
            brand, 
            countryOfOrigin,
            price: Number(price),
            type: normalizedTypes
        });
        

        await newWatch.save();

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
        const { model: modelNumber } = req.params;

        const deleted = await Watch.findOneAndDelete({modelNumber});

        if (!deleted) {
            return res.status(404).json({
                success: false,
                message: "Watch not found",
                data: null
            })
        }

        
        return res.status(200).json({
            success: true,
            message: "Watch is deleted successfully",
            data: null
        });
    } catch (error) {
        next(error);
    }
}

exports.updateWatch = async (req, res, next) => {
    try {
        const { modelNumber } = req.params;
        const { brand, price} = req.body;

        if (brand === undefined && price === undefined) {
            return res.status(400).json({
                success: false,
                message: 'Please provide at least one field values to continue'
            })
        }

        try {
            await Watch.findOneAndUpdate({ modelNumber }, {
                $set: {
                    brand,
                    price
                }
            });
            
            return res.status(200).json({
                message: 'Watch details updated'
            })
        }
        catch (error) {
            next(error);
        }
    
    } catch (error) {
        next(error);
    }
}

exports.getWatchesByType = async (req, res, next) => {
    try {
        const {type} = req.params;
        const normalizedType = String(type).toLowerCase();

        if (ALLOWTYPES.includes(normalizedType)) {
            return res.status(404).json({
                success: false,
                message: 'Invalid type',
                data: [],
            });
        }

        const watches = await Watch.find({type: normalizedType}).lean();
        
        return res.status(200).json({
            success: true,
            message: "Watch fetched by type successfully",
            count: watches.length,
            data: watches
        })
    } catch (error) {
        next(error);
    }
}