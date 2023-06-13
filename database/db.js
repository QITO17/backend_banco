const { Sequelize } = require('sequelize');

const db = new Sequelize({
  dialect: 'postgres',
  username: 'postgres',
  password: 'root',
  database: 'banco',
  port: 5432,
  logging: false,
});

db.authenticate()
  .then(() => console.log('Autenticada'))
  .catch((err) => console.log(err));
db.sync()
  .then(() => console.log('sincronozada'))
  .catch((err) => console.log(err));
module.exports = { db };
