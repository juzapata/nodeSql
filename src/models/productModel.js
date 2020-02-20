const Sequelize = require('sequelize');
const sequelize = require('../database/index');

// criando o model dos produtos
const Product = sequelize.define('product', {
    dbId: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        allowNull: false,
        primaryKey: true
    },
    id: {
        type: Sequelize.STRING,
        allowNull: false,
        unique: true
    },
    name: {
        type: Sequelize.STRING,
        allowNull: false
    },
    bar_code: {
        type: Sequelize.STRING,
        allowNull: false
    },
    productPicture: {
        type: Sequelize.STRING,
        allowNull: false
    },
    inStock: {
        type: Sequelize.INTEGER,
        allowNull: false
    },
    category: {
        type: Sequelize.INTEGER,
        allowNull: false
    }
});

module.exports = Product;
