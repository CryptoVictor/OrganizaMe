const pool = require('../config/database');

const criarReserva = async ({ usuario_id, sala_id, data_inicio, data_fim, observacoes, status }) => {
  const query = `
    INSERT INTO reservas (usuario_id, sala_id, data_inicio, data_fim, observacoes, status)
    VALUES ($1, $2, $3, $4, $5, $6)
    RETURNING *`;

  const values = [usuario_id, sala_id, data_inicio, data_fim, observacoes ?? null, status ?? 'ativa'];
  const result = await pool.query(query, values);
  return result.rows[0];
};

const listarReservas = async () => {
  const result = await pool.query('SELECT * FROM reservas');
  return result.rows;
};

const editarReserva = async ({ id, usuario_id, sala_id, data_inicio, data_fim, observacoes, status }) => {
  const query = `
    UPDATE reservas
    SET usuario_id = $1, sala_id = $2, data_inicio = $3, data_fim = $4, observacoes = $5, status = $6
    WHERE id = $7
    RETURNING *`;

  const values = [usuario_id, sala_id, data_inicio, data_fim, observacoes, status, id];
  const result = await pool.query(query, values);
  return result.rows[0];
};

const excluirReserva = async (id) => {
  const result = await pool.query('DELETE FROM reservas WHERE id = $1 RETURNING *', [id]);
  return result.rows[0];
};

module.exports = {
  criarReserva,
  listarReservas,
  editarReserva,
  excluirReserva,
};
