const express = require('express');
const bodyParser = require('body-parser');

const product = require('./models/productModel');
const users = require('./models/userModel');
const sequelize = require('./database/index');
const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));


require('./controllers/productsController')(app);
require('./controllers/userController')(app);

// criação das tabelas no mySql
sequelize.sync().then(result => {
    app.listen(3000, console.log('Servidor está rodando...'));
}).catch(err => console.log(err))

  


