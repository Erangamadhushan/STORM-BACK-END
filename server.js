const express = require('express');
require('dotenv').config;
const app = express();
const watchRoutes = require('./routes/watch/watch.routes');
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


app.use(errorHandler);



// Start the server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
    console.log(`Visit http://localhost:${PORT}/ to access the server.`);
    
});