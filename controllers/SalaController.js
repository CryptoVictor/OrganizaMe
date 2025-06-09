const salaModel = require('../models/SalaModel');

// Criar
exports.criarSala = async (req, res) => {
  try {
    const sala = await salaModel.criarSala(req.body);
    res.status(201).json(sala);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// Listar
exports.listarSalas = async (req, res) => {
  try {
    const salas = await salaModel.listarSalas();
    res.status(200).json(salas);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// Editar
exports.editarSala = async (req, res) => {
  try {
    const sala = await salaModel.editarSala({ id: req.params.id, ...req.body });
    if (!sala) return res.status(404).json({ message: 'Sala não encontrada' });
    res.status(200).json(sala);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// Excluir
exports.excluirSala = async (req, res) => {
  try {
    const sala = await salaModel.excluirSala(req.params.id);
    if (!sala) return res.status(404).json({ message: 'Sala não encontrada' });
    res.status(200).json({ message: 'Sala excluída com sucesso' });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};
