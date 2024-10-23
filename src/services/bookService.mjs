// services/booksService.mjs
import Book from '../models/book.mjs';

// Add a new book
export const addBook = async (bookData) => {
    const book = await Book.create(bookData);
    return book;
};

// Update a book’s details
export const updateBook = async (id, updatedData) => {
    const book = await Book.findByPk(id);
    if (!book) throw new Error('Book not found');
    await book.update(updatedData);
    return book;
};

// Delete a book
export const deleteBook = async (id) => {
    const book = await Book.findByPk(id);
    if (!book) throw new Error('Book not found');
    await book.destroy();
    return { message: 'Book deleted successfully' };
};

// List all books
export const listAllBooks = async () => {
    return await Book.findAll();
};

// Search books by title, author, or ISBN
export const searchBooks = async (query) => {
    return await Book.findAll({
        where: {
            [Op.or]: [
                { title: { [Op.iLike]: `%${query}%` } },
                { author: { [Op.iLike]: `%${query}%` } },
                { ISBN: { [Op.iLike]: `%${query}%` } },
            ],
        },
    });
};
