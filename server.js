const express = require('express');
const app = express();
const cors = require('cors');
const watchRoutes = require('./routes/watch/watch.routes');
const userRoutes = require('./routes/user/customer.routes');
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
// Enable CORS
app.use(cors(
    {
        origin: '*',
        methods: ['GET', 'POST', 'PUT', 'PATCH', 'DELETE'],
        allowedHeaders: ['Content-Type', 'Authorization']
    }
));
app.use(express.static('public')); 

// Sample route
app.get('/', (req, res) => {
    res.send('Welcome to the Storm Back-End Server! go the /api/watches to see watches');
});

app.use('/api/watches', watchRoutes);
app.use('/api/auth', userRoutes);


app.use(errorHandler);



// Start the server
const PORT = config.port || 5000;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
    console.log(`Visit http://localhost:${PORT} to access the server.`);
    
}); 
