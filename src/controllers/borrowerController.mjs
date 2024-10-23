import * as borrowerService from '../services/borrowerService.mjs';

export const addBorrower = async (req, res, next) => {
  try {
    const borrower = await borrowerService.addBorrower(req.body);
    res.status(201).json(borrower);
  } catch (error) {
    next(error);
  }
};

export const getAllBorrowers = async (req, res, next) => {
  try {
    const borrowers = await borrowerService.getAllBorrowers();
    res.json(borrowers);
  } catch (error) {
    next(error);
  }
};

export const updateBorrower = async (req, res, next) => {
  try {
    const { id } = req.params;
    await borrowerService.updateBorrower(id, req.body);
    res.json({ message: 'Borrower updated successfully' });
  } catch (error) {
    next(error);
  }
};

export const deleteBorrower = async (req, res, next) => {
  try {
    const { id } = req.params;
    await borrowerService.deleteBorrower(id);
    res.json({ message: 'Borrower deleted successfully' });
  } catch (error) {
    next(error);
  }
};
