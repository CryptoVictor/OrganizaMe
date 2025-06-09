// routes/index.js
const express = require('express');
const router = express.Router();
const SalaController = require('../controllers/SalaController');
const ReservaController = require('../controllers/ReservaController');
const UsuarioController = require('../controllers/UsuarioController');

// Rota inicial

router.get('/', async (req, res) => {
  res.render('pages/index.ejs');
});


// Rotas para o CRUD de salas

// Página de salas
router.get('/salas', (req, res) => {
  res.render('pages/salas.ejs');
});
// API de salas
router.get('/api/salas', SalaController.listarSalas);
router.post('/api/salas', SalaController.criarSala);
router.put('/api/salas/:id', SalaController.editarSala);
router.delete('/api/salas/:id', SalaController.excluirSala);

// Rotas para o CRUD de reservas

// Página de reservas
router.get('/reservas', (req, res) => {
  res.render('pages/reservas.ejs');
});
// API de reservas
router.get('/api/reservas', ReservaController.listarReservas);
router.post('/api/reservas', ReservaController.criarReserva);
router.put('/api/reservas/:id', ReservaController.editarReserva);
router.delete('/api/reservas/:id', ReservaController.excluirReserva);

// Rotas para o CRUD de usuarios

// Página de usuários
router.get('/usuarios', (req, res) => {
  res.render('pages/usuarios.ejs');
});
// API de usuários
router.get('/api/usuarios', UsuarioController.listarUsuarios);
router.post('/api/usuarios', UsuarioController.criarUsuario);
router.put('/api/usuarios/:id', UsuarioController.editarUsuario);
router.delete('/api/usuarios/:id', UsuarioController.excluirUsuario);

module.exports = router;