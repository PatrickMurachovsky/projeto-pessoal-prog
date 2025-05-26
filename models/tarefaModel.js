const db = require("../config/db");

class Tarefa {
  static async getAll() {
    const result = await db.query("SELECT * FROM tarefas");
    return result.rows;
  }

  static async getById(id) {
    const result = await db.query(
      "SELECT * FROM tarefas WHERE id_tarefa = $1",
      [id]
    );
    return result.rows[0];
  }

  static async create(data) {
    const result = await db.query(
      `INSERT INTO tarefas (id_usuario, titulo, descricao, duracao, etiquetas)
       VALUES ($1, $2, $3, $4, $5) RETURNING *`,
      [data.id_usuario, data.titulo, data.descricao, data.duracao, data.etiquetas]
    );
    return result.rows[0];
  }

  static async update(id, data) {
    const result = await db.query(
      `UPDATE tarefas
       SET id_usuario = $1, titulo = $2, descricao = $3, duracao = $4, etiquetas = $5
       WHERE id_tarefa = $6
       RETURNING *`,
      [data.id_usuario, data.titulo, data.descricao, data.duracao, data.etiquetas, id]
    );
    return result.rows[0];
  }

  static async delete(id) {
    const result = await db.query(
      "DELETE FROM tarefas WHERE id_tarefa = $1 RETURNING *",
      [id]
    );
    return result.rowCount > 0;
  }
}

module.exports = Tarefa;
