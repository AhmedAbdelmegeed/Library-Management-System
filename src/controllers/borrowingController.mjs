import * as borrowingService from '../services/borrowingService.mjs';

export const checkoutBook = async (req, res, next) => {
  try {
    const borrowing = await borrowingService.checkoutBook(req.body);
    res.status(201).json(borrowing);
  } catch (error) {
    next(error);
  }
};

export const returnBook = async (req, res, next) => {
  try {
    const { id } = req.params;
    await borrowingService.returnBook(id);
    res.json({ message: 'Book returned successfully' });
  } catch (error) {
    next(error);
  }
};

export const getBorrowingsByBorrower = async (req, res, next) => {
  try {
    const { borrowerId } = req.params;
    const borrowings = await borrowingService.getBorrowingsByBorrower(borrowerId);
    res.json(borrowings);
  } catch (error) {
    next(error);
  }
};

export const getOverdueBooks = async (req, res, next) => {
  try {
    const overdueBooks = await borrowingService.getOverdueBooks();
    res.json(overdueBooks);
  } catch (error) {
    next(error);
  }
};
