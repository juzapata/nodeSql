const Sequelize = require('sequelize');

// criando a conexão com o sql local
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
