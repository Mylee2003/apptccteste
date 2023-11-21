const express = require('express');
const router = express.Router();
const usuarioController = require('../controllers/Usercontroller');


// Defina as rotas para CRUD de usuários
router.post('/usuario-Criar', usuarioController.criarUsuario);
router.get('/usuario-listar', usuarioController.listarUsuarios);
router.get('/usuario-buscar', usuarioController.buscarUsuarioPorId);
router.put('/usuario-atualizar', usuarioController.atualizarUsuario);
router.delete('/usuario-excluir', usuarioController.excluirUsuario);

module.exports = router;