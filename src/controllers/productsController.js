// 3 pack modules
const express = require('express');


const db = require('../database/index');
const Product = require('../models/productModel');
const User = require('../models/userModel');
const router = express.Router();

/* 
registrar produto 
exemplo de req -> 
{
    "userName": "Danilo",
    "email": "danilo@email.com",
    "adm": false ou true
}
*/
router.post('/register-product', async (req, res) => {
    try {
        const product = req.body;
        let result = await Product.create(product);
        console.log(result);
        return res.status(200).send({ success: true, result: "Produto adicionado!" });
    } catch (err) {
        return res.status(400).send({ erro: err.errors[0].message });
    }
});

/* Leitura de produtos
 exemplo de req 
 {
    "id": 3
 }
*/
router.get('/get-product', async (req, res) => {
    try {
        const { id } = req.body;
        const user = await User.findOne({
            where: {
                id: id
            }
        });
        console.log(user);
        // validando se usuário existe
        if (!user) {
            return res.status(400).send({ erro: 'Usuário não existe, registre um para poder ver os produtos' });
        }
        let userAdm = user.dataValues.adm;

        // validando a o que usuário tem acesso
        if (userAdm === false) {
            let productsOne = await Product.findAll({
                where: {
                    category: 1
                }
            })
            let mapedProducts = productsOne.map(el => el.dataValues);
            console.log(mapedProducts);
            return res.status(200).send({ result: mapedProducts });
        }
        
        let allproducts = await Product.findAll();
        let mapedProducts = allproducts.map(el => el.dataValues);
        return res.status(200).send({ result: mapedProducts });
    } catch (err) {
        return res.status(400).send({ erro: err.errors[0].message });
    }
});


module.exports = app => app.use('/products', router);