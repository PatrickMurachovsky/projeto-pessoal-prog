const db = require("../config/db");

class Tarefa {
  static async getAll() {
    const result = await db.query("SELECT * FROM tarefas");
    return result.rows;
  }

  static async create(data) {
    const result = await db.query(
      `INSERT INTO tarefas (titulo) VALUES ($1) RETURNING *`,
      [data.titulo]
    );
    return result.rows[0];
  }

  // outros métodos podem ficar, mas só `getAll` e `create` são usados agora
}

module.exports = Tarefa;
