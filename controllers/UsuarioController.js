const pool = require('../config/database');

// Criar um novo usuário
exports.criarUsuario = async (req, res) => {
  const { nome, email, senha, papel } = req.body;

  const query = `
    INSERT INTO usuarios (nome, email, senha, papel)
    VALUES ($1, $2, $3, $4)
    RETURNING *`;

  const values = [nome, email, senha, papel ?? 'usuario'];

  try {
    const result = await pool.query(query, values);
    res.status(201).json(result.rows[0]);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// Listar todos os usuários
exports.listarUsuarios = async (req, res) => {
  try {
    const result = await pool.query('SELECT * FROM usuarios');
    res.status(200).json(result.rows);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// Editar um usuário
exports.editarUsuario = async (req, res) => {
  const { id } = req.params;
  const { nome, email, senha, papel } = req.body;

  const query = `
    UPDATE usuarios
    SET nome = $1, email = $2, senha = $3, papel = $4
    WHERE id = $5 RETURNING *`;

  const values = [nome, email, senha, papel, id];

  try {
    const result = await pool.query(query, values);
    if (result.rows.length === 0) {
      return res.status(404).json({ message: 'Usuário não encontrado' });
    }
    res.status(200).json(result.rows[0]);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// Excluir um usuário
exports.excluirUsuario = async (req, res) => {
  const { id } = req.params;

  try {
    const result = await pool.query('DELETE FROM usuarios WHERE id = $1 RETURNING *', [id]);
    if (result.rows.length === 0) {
      return res.status(404).json({ message: 'Usuário não encontrado' });
    }
    res.status(200).json({ message: 'Usuário excluído com sucesso' });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};
