const pool = require('../config/database');

// Criar uma nova reserva
exports.criarReserva = async (req, res) => {
  const { usuario_id, sala_id, data_inicio, data_fim, observacoes, status } = req.body;

  const query = `
    INSERT INTO reservas (usuario_id, sala_id, data_inicio, data_fim, observacoes, status)
    VALUES ($1, $2, $3, $4, $5, $6)
    RETURNING *`;

  const values = [usuario_id, sala_id, data_inicio, data_fim, observacoes ?? null, status ?? 'ativa'];

  try {
    const result = await pool.query(query, values);
    res.status(201).json(result.rows[0]);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// Listar todas as reservas
exports.listarReservas = async (req, res) => {
  try {
    const result = await pool.query('SELECT * FROM reservas');
    res.status(200).json(result.rows);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// Editar uma reserva
exports.editarReserva = async (req, res) => {
  const { id } = req.params;
  const { usuario_id, sala_id, data_inicio, data_fim, observacoes, status } = req.body;

  const query = `
    UPDATE reservas
    SET usuario_id = $1, sala_id = $2, data_inicio = $3, data_fim = $4, observacoes = $5, status = $6
    WHERE id = $7 RETURNING *`;

  const values = [usuario_id, sala_id, data_inicio, data_fim, observacoes, status, id];

  try {
    const result = await pool.query(query, values);
    if (result.rows.length === 0) {
      return res.status(404).json({ message: 'Reserva não encontrada' });
    }
    res.status(200).json(result.rows[0]);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// Excluir uma reserva
exports.excluirReserva = async (req, res) => {
  const { id } = req.params;

  try {
    const result = await pool.query('DELETE FROM reservas WHERE id = $1 RETURNING *', [id]);
    if (result.rows.length === 0) {
      return res.status(404).json({ message: 'Reserva não encontrada' });
    }
    res.status(200).json({ message: 'Reserva excluída com sucesso' });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};
