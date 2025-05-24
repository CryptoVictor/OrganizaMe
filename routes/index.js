// routes/index.js
const express = require('express');
const router = express.Router();
const SalaController = require('../controllers/SalaController');
const ReservaController = require('../controllers/ReservaController');
const UsuarioController = require('../controllers/UsuarioController');

// Rotas para o CRUD de salas
router.post('/salas', SalaController.criarSala);
router.get('/salas', SalaController.listarSalas);
router.put('/salas/:id', SalaController.editarSala);
router.delete('/salas/:id', SalaController.excluirSala);

// Rotas para o CRUD de reservas

router.post('/reservas', ReservaController.criarReserva);
router.get('/reservas', ReservaController.listarReservas);
router.put('/reservas/:id', ReservaController.editarReserva);
router.delete('/reservas/:id', ReservaController.excluirReserva);

// Rotas para o CRUD de usuarios

router.post('/usuarios', UsuarioController.criarUsuario);
router.get('/usuarios', UsuarioController.listarUsuarios);
router.put('/usuarios/:id', UsuarioController.editarUsuario);
router.delete('/usuarios/:id', UsuarioController.excluirUsuario);

module.exports = router;