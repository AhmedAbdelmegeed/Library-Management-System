import express from 'express';
import bodyParser from 'body-parser';
import booksRoutes from './routes/booksRoutes.mjs';
import borrowerRoutes from './routes/borrowerRoutes.mjs';
import borrowingRoutes from './routes/borrowingRoutes.mjs';
import { errorHandler } from './middleware/errorHandler.mjs';

const app = express();
app.use(bodyParser.json());

// Routes
app.use('/books', booksRoutes);
app.use('/borrower', borrowerRoutes);
app.use('/borrowing', borrowingRoutes);

// Error handling middleware
app.use(errorHandler);

export default app;
