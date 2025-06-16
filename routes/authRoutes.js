// routes/authRoutes.js
const express = require('express');
const router = express.Router();
const db = require('../../../../../Downloads/projeto-pessoal-prog (1)/projeto-pessoal-prog/config/db');

router.post('/', async (req, res) => {
  const { email, password } = req.body;

  try {
    const result = await db.query(
      'SELECT * FROM users WHERE email = $1 AND senha = $2',
      [email, password]
    );

    if (result.rows.length > 0) {
      res.redirect('/tarefas');
    } else {
      res.render('main', {
        pageTitle: 'Login',
        content: 'login',
        erro: 'Credenciais inválidas'
      });
    }
  } catch (err) {
    res.status(500).send('Erro interno no servidor');
  }
});

module.exports = router;