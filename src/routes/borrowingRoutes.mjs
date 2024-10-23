import express from 'express';
import {
  checkoutBook,
  returnBook,
  getBorrowingsByBorrower,
  getOverdueBooks,
} from '../controllers/borrowingController.mjs';

const router = express.Router();

router.post('/checkout', checkoutBook);
router.put('/return/:id', returnBook);
router.get('/borrower/:borrowerId', getBorrowingsByBorrower);
router.get('/overdue', getOverdueBooks);

export default router;
