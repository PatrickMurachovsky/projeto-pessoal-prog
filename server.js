const express = require('express');
const app = express();
const path = require('path');
const usersRouter = require('./routes/userRoutes');
const tarefasRouter = require('./routes/tarefaRoutes');
const authRouter = require('./routes/authRoutes'); // agora vai ser útil

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static('public'));

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

// páginas principais
app.get('/', (req, res) => {
  res.render('main', { pageTitle: 'Login', content: 'login' });
});

app.get('/cadastro', (req, res) => {
  res.render('main', { pageTitle: 'Cadastro', content: 'cadastro' });
});

app.get('/tarefas', (req, res) => {
  res.render('main', { pageTitle: 'Tarefas', content: 'tarefas' });
});

// rotas de API
app.use('/users', usersRouter);
app.use('/api/tarefas', tarefasRouter);
app.use('/login', authRouter); // esta será a rota de login

app.listen(3000, () => console.log('Servidor rodando em http://localhost:3000'));