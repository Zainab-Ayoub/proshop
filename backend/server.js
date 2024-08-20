import express from 'express';
import dotenv from 'dotenv';
import connectDB from './config/db.js';
import { notFound, errorHandler } from './middleware/errorMiddleware.js';
import productRoutes from './routes/productRoutes.js';
import userRoutes from './routes/userRoutes.js';
import cors from 'cors';

dotenv.config();
connectDB();

const app = express();

// body parser middleware

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(cors());

app.use(express.json()); // Middleware to parse JSON bodies

app.get('/', (req, res) => {
    res.send('API is running...');
});

app.use('/api/products', productRoutes); // Use productRoutes for API routes
app.use('/api/users', userRoutes); // Use userRoutes for API routes

app.use(notFound); // Middleware to handle 404 errors
app.use(errorHandler); // Middleware to handle other errors

const port = process.env.PORT || 5000;
app.listen(port, () => console.log(`Server is running on port ${port}`));
