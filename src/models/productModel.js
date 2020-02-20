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


//  {
//     "id": "de380ab7-6c7d-4fb8-91af-a10fd8cd7ec3",
//     "name": "Maionese Hellmann's Balde 3 KG",
//     "bar_code": "7891150035959",
//     "productPicture": "https://sifu.unileversolutions.com/image/pt-BR/original/2/maionese-hellmann-s-balde-3-kg-50364576.png",
//     "inStock": 700,
//     "category": 1
//   }


// {
//     "id": "sr290al1-9r5s-6fn8-57af-a65gc4tj7ec3",
//     "name": "PlayStation 5",
//     "bar_code": "7893782645360",
//     "productPicture": "https://imagens.canaltech.com.br/produto/1571406440-7317-principal-m.png",
//     "inStock": 10,
//     "category": 2
//   }

// {
//     "id": "fr560ag8-9r5s-6fn8-91af-a65fd4tj7ec3",
//     "name": "Pickles Hemmer 300g",
//     "bar_code": "7896505435360",
//     "productPicture": "https://www.paodeacucar.com/img/uploads/1/731/614731.png?type=product",
//     "inStock": 400,
//     "category": 1
//   }

// {
//     "id": "bo380ab8-9r5s-4fb8-91af-a10fd8cd7ec3",
//     "name": "Nintendo Switch",
//     "bar_code": "7894100035910",
//     "productPicture": "https://encrypted-tbn2.gstatic.com/shopping?q=tbn:ANd9GcTEU9_w_jnplCy6uyRUz5Krrvuz7c2MgKALwNdBh5fkHD0wuWb02ms&usqp=CAc",
//     "inStock": 50,
//     "category": 2
//   }