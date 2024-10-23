import Borrowing from '../models/borrowing.mjs';

export const checkoutBook = async (borrowData) => await Borrowing.create(borrowData);
export const returnBook = async (id) =>
  await Borrowing.update({ returned: true }, { where: { id } });
export const getBorrowingsByBorrower = async (borrowerId) =>
  await Borrowing.findAll({ where: { BorrowerId: borrowerId } });
export const getOverdueBooks = async () => 
  await Borrowing.findAll({ where: { dueDate: { [Op.lt]: new Date() }, returned: false } });
