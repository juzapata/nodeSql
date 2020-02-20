const Sequelize = require('sequelize');

const sequelize = new Sequelize('jurosBaixosCase', 'root', '030490Nizlopi!', {
    dialect: 'mysql', 
    host: 'localhost'})

    sequelize
    .authenticate()
    .then(() => {
      console.log('Connection has been established successfully.');
    })
    .catch(err => {
      console.error('Unable to connect to the database:', err);
    });

module.exports = sequelize;




// const mysql = require('mysql2');

// const pool = mysql.createPool({
//     host: 'localhost',
//     user: 'root',
//     database: 'jurosBaixosCase',
//     password: '030490Nizlopi!'
// }, console.log('conectado com a base de dados...'))

// module.exports = pool.promise();