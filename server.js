const express = require('express');
require('dotenv').config;
const app = express();
const watchRoutes = require('./routes/watch/watch.routes');
const customerRoutes = require('./routes/user/customer.routes');
const config = require('./config');
const errorHandler = require('./middleware/errorHandler');

const connectDB = require('./database/mongoose');

// Connect MongoDB Connection
connectDB();

/// body parser middleware
app.use(express.json());
app.use(express.urlencoded({
    extended: true
}));
app.use(express.static('public')); 

// Sample route
app.get('/', (req, res) => {
    res.send('Welcome to the Storm Back-End Server! go the /api/watches to see watches');
});

app.use('/api/watches', watchRoutes);
app.use('/api/customer', customerRoutes);


app.use(errorHandler);



// Start the server
const PORT = config.port || 5000;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
    console.log(`Visit http://localhost:${PORT}/ to access the server.`);
    
}); 

/*
    const startServer = async () => {
        try {
            await  connectDB();
            const port = process.env.PORT;

            // connect server
            const server = app.listen(port, () => {
                console.log(`Server running on port ${port}`);
                console.log(`Server running on http://localhost:${port}`);    
            });

            const gracefulClose = async (signal) => {
                console.log(`${signal} received: closing server and MongoDB connection...`);
                server.close(async (err) => {
                    if(err) {
                        console.error('Error closing HTTP Server:', err);
                        process.exit(1);
                    }    
                    
                    try {
                        await connectDB().disconnect();
                        console.log('MongoDB connection closed, Exiting process');
                        process.exit(0);
                    }
                    catch (error) {
                        console.error('Error disconnecting database', error);
                        process.exit(1);
                    }
                })
            }
        }
        catch (error) {
        
        }   
    }

    startServer();
*/