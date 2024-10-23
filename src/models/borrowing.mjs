import { DataTypes } from 'sequelize';
import sequelize from '../config/db.mjs';
import Book from './book.mjs';
import Borrower from './borrower.mjs';

const Borrowing = sequelize.define('borrowing', {
    dueDate: {
        type: DataTypes.DATE,
        allowNull: false
    },
    returned: {
        type: DataTypes.BOOLEAN,
        defaultValue: false
    },
});

Book.hasMany(Borrowing);
Borrower.hasMany(Borrowing);
Borrowing.belongsTo(Book);
Borrowing.belongsTo(Borrower);

export default Borrowing;
