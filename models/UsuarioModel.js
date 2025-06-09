const pool = require('../config/database');

const criarUsuario = async ({ nome, email, senha, papel }) => {
  const query = `
    INSERT INTO usuarios (nome, email, senha, papel)
    VALUES ($1, $2, $3, $4)
    RETURNING *`;
  const values = [nome, email, senha, papel ?? 'usuario'];

  const result = await pool.query(query, values);
  return result.rows[0];
};

const listarUsuarios = async () => {
  const result = await pool.query('SELECT * FROM usuarios');
  return result.rows;
};

const editarUsuario = async ({ id, nome, email, senha, papel }) => {
  const query = `
    UPDATE usuarios
    SET nome = $1, email = $2, senha = $3, papel = $4
    WHERE id = $5
    RETURNING *`;
  const values = [nome, email, senha, papel, id];

  const result = await pool.query(query, values);
  return result.rows[0];
};

const excluirUsuario = async (id) => {
  const result = await pool.query('DELETE FROM usuarios WHERE id = $1 RETURNING *', [id]);
  return result.rows[0];
};

module.exports = {
  criarUsuario,
  listarUsuarios,
  editarUsuario,
  excluirUsuario,
};
