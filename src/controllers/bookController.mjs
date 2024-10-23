import * as booksService from '../services/bookService.mjs';

// Add a new book
export const addBook = async (req, res) => {
  try {
    const book = await booksService.addBook(req.body);
    res.status(201).json(book);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// Update a book’s details
export const updateBook = async (req, res) => {
  try {
    const book = await booksService.updateBook(req.params.id, req.body);
    res.json(book);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// Delete a book
export const deleteBook = async (req, res) => {
  try {
    const result = await booksService.deleteBook(req.params.id);
    res.json(result);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// List all books
export const listAllBooks = async (req, res) => {
  try {
    const books = await booksService.listAllBooks();
    res.json(books);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// Search books by title, author, or ISBN
export const searchBooks = async (req, res) => {
  try {
    const query = req.query.q;
    const books = await booksService.searchBooks(query);
    res.json(books);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};
