const express = require('express');
const router = express.Router();
const db = require('../config/db');

// Rota de login (já existente)
router.post('/', async (req, res) => {
  const { email, senha } = req.body;
  const result = await db.query(
    'SELECT * FROM users WHERE email = $1 AND senha = $2',
    [email, senha]
  );
  if (result.rows.length > 0) {
    res.redirect('/about');
  } else {
    res.render('pages/page1', { erro: 'Credenciais inválidas' });
  }
});

// Rota de cadastro (registro)
router.post('/register', async (req, res) => {
  const { nome, email, senha } = req.body;
  try {
    // Insere novo usuário no banco
    await db.query(
      'INSERT INTO users (nome, email, senha) VALUES ($1, $2, $3)',
      [nome, email, senha]
    );
    res.redirect('/login'); // Ou para onde desejar após cadastro
  } catch (error) {
    res.render('pages/page1', { erro: 'Erro ao registrar usuário' });
  }
});

module.exports = router;