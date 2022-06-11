import { Sequelize } from 'sequelize';

const db = new Sequelize('clients_db', 'root', 'password', {
  host: 'localhost',
  dialect: 'mysql',
});

export default db;
