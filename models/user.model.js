const  { db } = require('../database/db');
const { DataTypes } = require('sequelize');
const User = db.define('user', {
    id: {
        primaryKey: true,
        autoIncrement: true,
        allowNull: false,
        type: DataTypes.INTEGER,
    },
    nameUser: {
        allowNull: false,
        type: DataTypes.STRING
    },
    accountNumber: {
        allowNull: false,
        type: DataTypes.INTEGER,
        defaultValue: () => Math.floor(Math.random() * 1000000)
    },
    password: {
        allowNull: false,
        type: DataTypes.STRING
    },
    amount: {
        allowNull: false,
        type: DataTypes.DOUBLE,
        defaultValue:1000
    },
    status: {
        type: DataTypes.ENUM('active', 'deactivated'),
        defaultValue: 'active',
        allowNull: false
    }
});

module.exports = User;

