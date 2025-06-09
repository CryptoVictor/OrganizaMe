const pool = require('../config/database');

const criarSala = async ({ nome, localizacao, capacidade, descricao, disponivel }) => {
  const query = `
    INSERT INTO salas (nome, localizacao, capacidade, descricao, disponivel)
    VALUES ($1, $2, $3, $4, $5)
    RETURNING *`;

  const values = [nome, localizacao, capacidade, descricao, disponivel ?? true];
  const result = await pool.query(query, values);
  return result.rows[0];
};

const listarSalas = async () => {
  const result = await pool.query('SELECT * FROM salas');
  return result.rows;
};

const editarSala = async ({ id, nome, localizacao, capacidade, descricao, disponivel }) => {
  const query = `
    UPDATE salas
    SET nome = $1, localizacao = $2, capacidade = $3, descricao = $4, disponivel = $5
    WHERE id = $6
    RETURNING *`;

  const values = [nome, localizacao, capacidade, descricao, disponivel, id];
  const result = await pool.query(query, values);
  return result.rows[0];
};

const excluirSala = async (id) => {
  const result = await pool.query('DELETE FROM salas WHERE id = $1 RETURNING *', [id]);
  return result.rows[0];
};

module.exports = {
  criarSala,
  listarSalas,
  editarSala,
  excluirSala,
};
