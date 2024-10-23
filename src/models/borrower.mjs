import { DataTypes } from 'sequelize';
import sequelize from '../config/db.mjs';

const Borrower = sequelize.define('borrower', {
    name: {
        type: DataTypes.STRING,
        allowNull: false
    },
    email: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true
    },
    registeredDate: {
        type: DataTypes.DATE,
        defaultValue: DataTypes.NOW
    },
});

export default Borrower;
