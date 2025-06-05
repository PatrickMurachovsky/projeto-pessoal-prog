const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');

const tarefaRoutes = require('./routes/tarefaRoutes');
const userRoutes = require('./routes/userRoutes');
const frontRoutes = require('./routes/frontRoutes');

const app = express();
const port = 3000;
app.set('view engine', 'ejs');

// Middlewares
app.use(cors());
app.use(bodyParser.json());

// Rotas
app.use('/users', userRoutes);
app.use('/tarefas', tarefaRoutes);
app.use('/', frontRoutes);

// Inicializa o servidor
app.listen(port, () => {
  console.log(`Servidor rodando na porta ${port}`);
});
