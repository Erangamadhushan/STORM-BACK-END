const express = require('express');
const app = express();
const cors = require('cors');
const watchRoutes = require('./routes/watch/watch.routes');
const userRoutes = require('./routes/user/customer.routes');
const paymentRoutes = require('./routes/payment/payment.routes');
const errorHandler = require('./middleware/errorHandler');


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
app.use('/api/payments', paymentRoutes);


app.use(errorHandler);

module.exports = app;