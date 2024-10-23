import express from 'express';
import {
  addBorrower,
  getAllBorrowers,
  updateBorrower,
  deleteBorrower,
} from '../controllers/borrowersController.mjs';

const router = express.Router();

router.post('/', addBorrower);
router.get('/', getAllBorrowers);
router.put('/:id', updateBorrower);
router.delete('/:id', deleteBorrower);

export default router;
