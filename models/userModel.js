const db = require('../config/db');

class User {
  static async getAll() {
    const result = await db.query('SELECT * FROM users');
    return result.rows;
  }

  static async getById(id) {
    const result = await db.query('SELECT * FROM users WHERE id = $1', [id]);
    return result.rows[0];
  }

  static async create(data) {
    const result = await db.query(
      'INSERT INTO users (nome, idade, email, senha) VALUES ($1, $2, $3, $4) RETURNING *',
      [data.nome, data.idade, data.email, data.senha]
    );
    return result.rows[0];
  }

  static async update(id, data) {
    const result = await db.query(
      'UPDATE users SET nome = $1, idade = $2, email = $3, senha = $4 WHERE id = $5 RETURNING *',
      [data.nome, data.idade, data.email, data.senha, id]
    );
    return result.rows[0];
  }

  static async delete(id) {
    const result = await db.query('DELETE FROM users WHERE id = $1 RETURNING *', [id]);
    return result.rowCount > 0;
  }
}

module.exports = User;
