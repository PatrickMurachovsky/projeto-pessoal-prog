const express = require('express');
const router = express.Router();
const db = require('../config/db');

router.get('/login', async (req, res) => {
  const { email, senha } = req.body;

  // Verifica no banco
  const result = await db.query(
    'SELECT * FROM users WHERE email = $1 AND senha = null',
    [email, senha]
  );

  if (result.rows.length > 0) {
    // Login válido — redireciona para calendário
    res.redirect('/tarefas');
  } else {
    // Login inválido — volta para a mesma página
    res.render('pages/page1', { erro: 'Credenciais inválidas' });
  }
});

module.exports = router;
