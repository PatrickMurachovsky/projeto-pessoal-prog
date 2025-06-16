const express = require('express');
const path = require('path');
const cors = require('cors');

// Rotas
const tarefaRoutes = require('./routes/tarefaRoutes');
const userRoutes = require('./routes/userRoutes');
const frontRoutes = require('./routes/frontRoutes');
const authRoutes = require('./routes/authRoutes');
const postRoutes = require('./routes/postRoutes');

const app = express();
const port = 3000;

// View engine
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views')); // importante se for usar partials

// Middlewares
app.use(cors());
app.use(express.json()); // ✅ para ler req.body em JSON
app.use(express.urlencoded({ extended: true })); // ✅ para ler req.body em forms (POST)

// Servir arquivos estáticos (css, js, imgs)
app.use(express.static(path.join(__dirname, 'public')));        // pasta pública geral
app.use('/css', express.static(path.join(__dirname, 'views/css'))); // arquivos CSS
app.use('/js', express.static(path.join(__dirname, 'views/js')));   // arquivos JS

// Rotas API
app.use('/tarefas', tarefaRoutes);  // ✅ API REST de tarefas
app.use('/users', userRoutes);      // ✅ API REST de usuários

// Rotas de frontend (páginas)
app.use('/', frontRoutes);

// Rotas de login/autenticação
app.use('/login', authRoutes);
// ⚠️ Evite conflitos: se postRoutes também é para login, junte em um só
// app.use('/login', postRoutes);

// Inicializa o servidor
app.listen(port, () => {
  console.log(`Servidor rodando em http://localhost:${port}`);
});
