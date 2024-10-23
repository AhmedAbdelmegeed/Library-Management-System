// routes/booksRoutes.mjs
import express from 'express';
import {
  addBook,
  updateBook,
  deleteBook,
  listAllBooks,
  searchBooks,
} from '../controllers/bookController.mjs';

const router = express.Router();

// Add a new book
router.post('/', addBook);

// Update a book’s details
router.put('/:id', updateBook);

// Delete a book
router.delete('/:id', deleteBook);

// List all books
router.get('/', listAllBooks);

// Search books by title, author, or ISBN
router.get('/search', searchBooks);

export default router;
