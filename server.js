const express = require('express');
const app = express();
const watchRoutes = require('./routes/watch/watch.routes');
const config = require('./config');
const errorHandler = require('./middleware/errorHandler');




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
const PORT = config.port || 3000;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
    console.log(`Visit http://localhost:${PORT}/ to access the server.`);
    
});