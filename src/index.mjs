// index.mjs
import express from 'express';
import bookRoutes from './routes/bookRoutes.mjs';
import sequelize from './config/db.mjs';
import dotenv from 'dotenv';

dotenv.config();

const app = express();
app.use(express.json());

// Register books routes
app.use('/api/books', bookRoutes);

// Sync database and start server
const PORT = process.env.PORT || 3000;
sequelize.sync().then(() => {
  app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
  });
});
