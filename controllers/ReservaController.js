const reservaModel = require('../models/ReservaModel');

// Criar
exports.criarReserva = async (req, res) => {
  try {
    const reserva = await reservaModel.criarReserva(req.body);
    res.status(201).json(reserva);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// Listar
exports.listarReservas = async (req, res) => {
  try {
    const reservas = await reservaModel.listarReservas();
    res.status(200).json(reservas);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// Editar
exports.editarReserva = async (req, res) => {
  try {
    const reserva = await reservaModel.editarReserva({ id: req.params.id, ...req.body });
    if (!reserva) return res.status(404).json({ message: 'Reserva não encontrada' });
    res.status(200).json(reserva);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// Excluir
exports.excluirReserva = async (req, res) => {
  try {
    const reserva = await reservaModel.excluirReserva(req.params.id);
    if (!reserva) return res.status(404).json({ message: 'Reserva não encontrada' });
    res.status(200).json({ message: 'Reserva excluída com sucesso' });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};
