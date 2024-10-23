import Borrower from '../models/borrower.mjs';

export const addBorrower = async (data) => await Borrower.create(data);
export const getAllBorrowers = async () => await Borrower.findAll();
export const updateBorrower = async (id, data) => await Borrower.update(data, { where: { id } });
export const deleteBorrower = async (id) => await Borrower.destroy({ where: { id } });
