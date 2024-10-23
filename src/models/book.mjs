import { DataTypes } from 'sequelize';
import sequelize from '../config/db.mjs';

const Book = sequelize.define('book', {
    title: {
        type: DataTypes.STRING,
        allowNull: false
    },
    author: {
        type: DataTypes.STRING,
        allowNull: false
    },
    ISBN: {
        type: DataTypes.STRING,
        unique: true,
        allowNull: false
    },
    quantity: {
        type: DataTypes.INTEGER,
        allowNull: false
    },
    shelfLocation: {
        type: DataTypes.STRING,
        allowNull: false
    },
});

export default Book;
