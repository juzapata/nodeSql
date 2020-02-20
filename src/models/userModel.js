const Sequelize = require('sequelize');
const sequelize = require('../database/index');

// criando o model dos produtos
const User = sequelize.define('user', {
    id: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        allowNull: false,
        primaryKey: true
    },
    userName: {
        type: Sequelize.STRING,
        allowNull: false,
        unique: true
    },
    email: {
        type: Sequelize.STRING,
        allowNull: false,
        unique: true
    },
    adm: {
        type: Sequelize.BOOLEAN,
        allowNull: false
    },
});


module.exports = User;


//  {
//     "id": "de380ab7-6c7d-4fb8-91af-a10fd8cd7ec3",
//     "name": "Maionese Hellmann's Balde 3 KG",
//     "bar_code": "7891150035959",
//     "productPicture": "https://sifu.unileversolutions.com/image/pt-BR/original/2/maionese-hellmann-s-balde-3-kg-50364576.png",
//     "inStock": 700,
//     "category": 1
//   }