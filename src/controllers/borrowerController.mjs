import * as borrowerService from '../services/borrowerService.mjs';

export const addBorrower = async (req, res) => {
  try {
    const borrower = await borrowerService.addBorrower(req.body);
    res.status(201).json(borrower);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'An error occurred while adding the borrower.' });
  }
};

export const getAllBorrowers = async (req, res) => {
  try {
    const borrowers = await borrowerService.getAllBorrowers();
    res.json(borrowers);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'An error occurred while retrieving borrowers.' });
  }
};

export const updateBorrower = async (req, res) => {
  try {
    const { id } = req.params;
    await borrowerService.updateBorrower(id, req.body);
    res.json({ message: 'Borrower updated successfully' });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'An error occurred while updating the borrower.' });
  }
};

export const deleteBorrower = async (req, res) => {
  try {
    const { id } = req.params;
    await borrowerService.deleteBorrower(id);
    res.json({ message: 'Borrower deleted successfully' });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'An error occurred while deleting the borrower.' });
  }
};
