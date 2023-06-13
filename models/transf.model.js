const { db } = require('../database/db');
const { DataTypes } = require('sequelize');
const Consignments = db.define('consignments', {
  id: {
    primaryKey: true,
    autoIncrement: true,
    allowNull: false,
    type: DataTypes.INTEGER,
  },
  amount: {
    allowNull: false,
    type: DataTypes.DOUBLE,
  },
  senderUserId: {
    allowNull: false,
    type: DataTypes.INTEGER,
  },
  receiverUserId: {
    allowNull: false,
    type: DataTypes.INTEGER,
  },
});

module.exports = Consignments;
