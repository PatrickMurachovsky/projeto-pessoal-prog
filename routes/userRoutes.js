const express = require('express');
const router = express.Router();
const userController = require('../controllers/userController');

// Rota GET para listar todos os usuários
router.get('/', userController.getAllUsers);

// Rota POST para criar novo usuário
router.post('/', userController.createUser);

module.exports = router;
