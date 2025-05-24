const pool = require('../config/database');

// Criar uma nova sala
exports.criarSala = async (req, res) => {
  const { nome, localizacao, capacidade, descricao, disponivel } = req.body;

  const query = `
    INSERT INTO salas (nome, localizacao, capacidade, descricao, disponivel)
    VALUES ($1, $2, $3, $4, $5)
    RETURNING *`;

  const values = [nome, localizacao, capacidade, descricao, disponivel ?? true];

  try {
    const result = await pool.query(query, values);
    res.status(201).json(result.rows[0]);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// Listar todas as salas
exports.listarSalas = async (req, res) => {
  try {
    const result = await pool.query('SELECT * FROM salas');
    res.status(200).json(result.rows);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// Editar uma sala
exports.editarSala = async (req, res) => {
  const { id } = req.params;
  const { nome, localizacao, capacidade, descricao, disponivel } = req.body;

  const query = `
    UPDATE salas
    SET nome = $1, localizacao = $2, capacidade = $3, descricao = $4, disponivel = $5
    WHERE id = $6 RETURNING *`;

  const values = [nome, localizacao, capacidade, descricao, disponivel, id];

  try {
    const result = await pool.query(query, values);
    if (result.rows.length === 0) {
      return res.status(404).json({ message: 'Sala não encontrada' });
    }
    res.status(200).json(result.rows[0]);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// Excluir uma sala
exports.excluirSala = async (req, res) => {
  const { id } = req.params;

  try {
    const result = await pool.query('DELETE FROM salas WHERE id = $1 RETURNING *', [id]);
    if (result.rows.length === 0) {
      return res.status(404).json({ message: 'Sala não encontrada' });
    }
    res.status(200).json({ message: 'Sala excluída com sucesso' });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};
