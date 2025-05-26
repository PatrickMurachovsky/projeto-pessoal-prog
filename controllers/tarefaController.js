const db = require("../config/db");

const getAllTarefas = async (req, res) => {
  try {
    const result = await db.query("SELECT * FROM tarefas");
    res.status(200).json(result.rows);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

const getTarefaById = async (req, res) => {
  try {
    const result = await db.query("SELECT * FROM tarefas WHERE id_tarefa = $1", [
      req.params.id,
    ]);
    const tarefa = result.rows[0];
    if (tarefa) {
      res.status(200).json(tarefa);
    } else {
      res.status(404).json({ error: "Tarefa não encontrada" });
    }
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

const createTarefa = async (req, res) => {
  try {
    const { id_usuario, titulo, descricao, duracao, etiquetas } = req.body;
    const result = await db.query(
      "INSERT INTO tarefas (id_usuario, titulo, descricao, duracao, etiquetas) VALUES ($1, $2, $3, $4, $5) RETURNING *",
      [id_usuario, titulo, descricao, duracao, etiquetas]
    );
    res.status(201).json(result.rows[0]);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

const updateTarefa = async (req, res) => {
  try {
    const { id_usuario, titulo, descricao, duracao, etiquetas } = req.body;
    const result = await db.query(
      "UPDATE tarefas SET id_usuario = $1, titulo = $2, descricao = $3, duracao = $4, etiquetas = $5 WHERE id_tarefa = $6 RETURNING *",
      [id_usuario, titulo, descricao, duracao, etiquetas, req.params.id]
    );
    const updatedTarefa = result.rows[0];
    if (updatedTarefa) {
      res.status(200).json(updatedTarefa);
    } else {
      res.status(404).json({ error: "Tarefa não encontrada" });
    }
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

const deleteTarefa = async (req, res) => {
  try {
    const result = await db.query(
      "DELETE FROM tarefas WHERE id_tarefa = $1 RETURNING *",
      [req.params.id]
    );
    const deletedTarefa = result.rows[0];
    if (deletedTarefa) {
      res.status(200).json(deletedTarefa);
    } else {
      res.status(404).json({ error: "Tarefa não encontrada" });
    }
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

module.exports = {
  getAllTarefas,
  getTarefaById,
  createTarefa,
  updateTarefa,
  deleteTarefa,
};
