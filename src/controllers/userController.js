const express = require('express');

const db = require('../database/index');
const User = require('../models/userModel');
const router = express.Router();


/* 
registrar usuário 
exemplo de req -> 
{
    "userName": "Danilo",
    "email": "danilo@email.com",
    "adm": false ou true
}
*/
router.post('/register-user', async (req, res) => {
    try {
        let user = req.body;
        if (!user) {
            res.status(400).send({ erro: "Por favor adicione as informações de criação do usúario" });
        }
        let result = await User.create(req.body);
        return res.status(200).send({ success: true, adicionado: result });
    } catch (err) {
        return res.status(400).send({ success: false, erro: err.errors[0].message });
    }
});

/* Leitura de usários
 exemplo de req 
 {
    "id": 3
 }
*/
router.get('/get-users', async (req, res) => {
    try {
        const { id } = req.body;
        const user = await User.findOne({
            where: {
                id: id
            }
        });
        // validando se usuário "logado" existe        
        if (!user) {
            return res.status(400).send({ erro: 'Usuário não existe, se registre como usuário para poder ver os outros usuários' });
        }
        const result = await User.findAll();
        return res.status(200).send({ success: true, result });
    } catch (err) {
        return res.status(400).send({ success: false, erro: err.errors[0].message });
    }
});


module.exports = app => app.use('/users', router);