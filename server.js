const app = require('./app');
const config = require('./config');
const connectDB = require('./database/mongoose');


// Connect MongoDB Connection
connectDB();

// Start the server
const PORT = config.port || 5000;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
    console.log(`Visit http://localhost:${PORT} to access the server.`);
    
}); 
