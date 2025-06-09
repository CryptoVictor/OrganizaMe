const UsuarioModel = require('../models/UsuarioModel');

// Criar um novo usuário
exports.criarUsuario = async (req, res) => {
  try {
    const usuario = await UsuarioModel.criarUsuario(req.body);
    res.status(201).json(usuario);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// Listar todos os usuários
exports.listarUsuarios = async (req, res) => {
  try {
    const usuarios = await UsuarioModel.listarUsuarios();
    res.status(200).json(usuarios);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// Editar um usuário
exports.editarUsuario = async (req, res) => {
  const { id } = req.params;
  const dadosAtualizados = { ...req.body, id };

  try {
    const usuario = await UsuarioModel.editarUsuario(dadosAtualizados);
    if (!usuario) {
      return res.status(404).json({ message: 'Usuário não encontrado' });
    }
    res.status(200).json(usuario);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// Excluir um usuário
exports.excluirUsuario = async (req, res) => {
  const { id } = req.params;

  try {
    const usuario = await UsuarioModel.excluirUsuario(id);
    if (!usuario) {
      return res.status(404).json({ message: 'Usuário não encontrado' });
    }
    res.status(200).json({ message: 'Usuário excluído com sucesso' });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};
