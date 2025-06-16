const fs = require('fs');
const path = require('path');
const { Pool } = require('pg');
require('dotenv').config();

const requiredEnv = ['DB_USER', 'DB_HOST', 'DB_DATABASE', 'DB_PASSWORD', 'DB_PORT'];
requiredEnv.forEach((key) => {
  if (!process.env[key]) {
    console.error(`❌ Variável de ambiente ausente: ${key}`);
    process.exit(1);
  }
});

const pool = new Pool({
  user: process.env.DB_USER,
  host: process.env.DB_HOST,
  database: process.env.DB_DATABASE,
  password: process.env.DB_PASSWORD,
  port: Number(process.env.DB_PORT),
  ssl: {
    rejectUnauthorized: false, // necessário para Supabase
  },
});

const runSQLScript = async () => {
  const filePath = path.join(__dirname, 'init.sql');

  console.log('📄 Lendo script SQL...');
  let sql;
  try {
    sql = fs.readFileSync(filePath, 'utf8');
  } catch (err) {
    console.error('❌ Erro ao ler o arquivo init.sql:', err.message);
    process.exit(1);
  }

  try {
    console.log('🔌 Conectando ao banco de dados...');
    console.log(`Host: ${process.env.DB_HOST}`);
    console.log(`Database: ${process.env.DB_DATABASE}`);

    await pool.query(sql);
    console.log('✅ Script SQL executado com sucesso!');
  } catch (err) {
    console.error('❌ Erro ao executar o script SQL:');
    console.error(err);
  } finally {
    await pool.end();
    console.log('🔒 Conexão com o banco encerrada.');
  }
};

runSQLScript();