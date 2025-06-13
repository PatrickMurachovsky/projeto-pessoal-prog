const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');

const tarefaRoutes = require('./routes/tarefaRoutes');
const userRoutes = require('./routes/userRoutes');
const frontRoutes = require('./routes/frontRoutes');
const authRoutes = require('./routes/authRoutes');
const postRoutes = require('./routes/postRoutes');



const app = express();
const port = 3000;
app.set('view engine', 'ejs');

// Middlewares
app.use(cors());
app.use(bodyParser.json());

// ...existing code...
app.use(express.static('views/css'));
app.use(express.static('views/js'));

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// Rotas
app.use('/users', userRoutes);
app.use('/tarefas', tarefaRoutes);
app.use('/', frontRoutes);
app.use('/login', authRoutes);
app.use('/login', postRoutes); // ou outro caminho, conforme seu front-end

// Inicializa o servidor
app.listen(port, () => {
  console.log(`Servidor rodando na porta ${port}`);
});
