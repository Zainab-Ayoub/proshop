import path from 'path';
import express from 'express';
import dotenv from 'dotenv';
import cookieParser from 'cookie-parser';
import connectDB from './config/db.js';
import { notFound, errorHandler } from './middleware/errorMiddleware.js';
import productRoutes from './routes/productRoutes.js';
import userRoutes from './routes/userRoutes.js';
import orderRoutes from './routes/orderRoutes.js';
import uploadRoutes from './routes/uploadRoutes.js';
import cors from 'cors';

// Load environment variables from .env file
dotenv.config();

// Connect to the database
connectDB();

const app = express();

// Middleware to parse JSON and URL-encoded bodies
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Middleware to parse cookies
app.use(cookieParser());

// CORS configuration
app.use(cors({
    origin: 'http://localhost:3000', // or your frontend URL
    credentials: true,
}));

// Define routes
app.use('/api/products', productRoutes); // Use productRoutes for API routes
app.use('/api/users', userRoutes); // Use userRoutes for API routes
app.use('/api/orders', orderRoutes); // Use orderRoutes for API routes
app.use('/api/upload', uploadRoutes); // Use uploadRoutes for images

// PayPal client ID endpoint
app.get('/api/config/paypal', (req, res) => {
    res.json({ clientId: process.env.PAYPAL_CLIENT_ID });
});

const __dirname = path.resolve(); // set __dirname to current directory
app.use('/uploads', express.static(path.join(__dirname, '/uploads')));

// Root route
app.get('/', (req, res) => {
    res.send('API is running...');
});

// Middleware to handle 404 errors
app.use(notFound);

// Middleware to handle other errors
app.use(errorHandler);

// Start the server
const port = process.env.PORT || 5000;
app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});
