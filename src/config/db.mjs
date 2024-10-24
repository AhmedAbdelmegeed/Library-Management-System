import { Sequelize } from 'sequelize';
import dotenv from 'dotenv';

dotenv.config();

console.log('Database:', process.env.database);
console.log('Username:', process.env.username);
console.log('Password:', process.env.password);
console.log('Host:', process.env.host);
console.log('Dialect:', process.env.dialect);
const sequelize = new Sequelize(process.env.DATABASE, "postgres", process.env.PASSWORD, {
    host: process.env.HOST,
    dialect: process.env.DIALECT,
});
export default sequelize;
