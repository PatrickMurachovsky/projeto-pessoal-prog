// server.js
const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');


const app = express();
const port = 3000;

// Middlewares
app.use(cors());
app.use(bodyParser.json());

// Usando as rotas definidas

app.listen(port, () => {
  console.log(`Servidor rodando na porta ${port}`);
});

const userRoutes = require('./routes/userRoutes');
const frontRoutes = require('./routes/frontRoutes');
app.use('/users', userRoutes);
app.use('/', frontRoutes);
