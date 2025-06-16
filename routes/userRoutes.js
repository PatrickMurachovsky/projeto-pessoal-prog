const express = require('express');
const router = express.Router();
const db = require('../../../../../Downloads/projeto-pessoal-prog (1)/projeto-pessoal-prog/config/db');

// Listar usuários
router.get('/', async (req, res) => {
  try {
    const result = await db.query('SELECT * FROM users');
    res.json(result.rows);
  } catch (err) {
    res.status(500).json({ error: 'Erro ao buscar usuários' });
  }
});

// Criar usuário (cadastro)
router.post('/', async (req, res) => {
  const { nome, idade, email, senha } = req.body;
  try {
    await db.query(
      'INSERT INTO users (nome, idade, email, senha) VALUES ($1, $2, $3, $4)',
      [nome, idade, email, senha]
    );
    res.status(201).json({ message: 'Usuário criado com sucesso' });
  } catch (err) {
    res.status(500).json({ error: 'Erro ao criar usuário' });
  }
});

module.exports = router;