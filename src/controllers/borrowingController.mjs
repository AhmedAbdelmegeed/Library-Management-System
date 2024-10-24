import * as borrowingService from '../services/borrowingService.mjs';

export const checkoutBook = async (req, res) => {
  try {
    const borrowing = await borrowingService.checkoutBook(req.body);
    res.status(201).json(borrowing);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'An error occurred while checking out the book.' });
  }
};

export const returnBook = async (req, res) => {
  try {
    const { id } = req.params;
    await borrowingService.returnBook(id);
    res.json({ message: 'Book returned successfully' });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'An error occurred while returning the book.' });
  }
};

export const getBorrowingsByBorrower = async (req, res) => {
  try {
    const { borrowerId } = req.params;
    const borrowings = await borrowingService.getBorrowingsByBorrower(borrowerId);
    res.json(borrowings);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'An error occurred while retrieving borrowings for the borrower.' });
  }
};

export const getOverdueBooks = async (req, res) => {
  try {
    const overdueBooks = await borrowingService.getOverdueBooks();
    res.json(overdueBooks);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'An error occurred while retrieving overdue books.' });
  }
};
