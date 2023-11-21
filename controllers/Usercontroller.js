const Usuario = require('../models/user');
//Obter um Único Usuário por ID (GET):
exports.buscarUsuarioPorId = async (req, res) => {
    const { idUser } = req.params;
    try {
      const usuario = await User.findByPk(idUser); // Consulta um usuário por ID
      if (!usuario) {
        res.status(404).json({ error: 'Usuário não encontrado.' });
      } else {
        res.json(usuario);
      }
    } catch (error) {
      res.status(500).json({ error: 'Erro ao buscar usuário.' });
    }
  };

  //Criar um Novo Usuário (POST):

  exports.criarUsuario = async (req, res) => {
    const { email, password, sexo, dataNasc, nome } = req.body;
    try {
      const novoUsuario = await User.create({
        email,
        password,
        sexo,
        dataNasc,
        nome,
      });
      res.status(201).json(novoUsuario);
    } catch (error) {
      res.status(400).json({ error: 'Erro ao criar usuário.' });
    }
  };


  //Atualizar um Usuário Existente (PUT):

  exports.atualizarUsuario = async (req, res) => {
    const { idUser } = req.params;
    const { email, password, sexo, dataNasc, nome } = req.body;
    try {
      const Atu_usuario = await User.findByPk(idUser); // Consulta o usuário por ID
      if (!usuario) {
        res.status(404).json({ error: 'Usuário não encontrado.' });
      } else {
        await user.update({
          email,
          password,
          sexo,
          dataNasc,
          nome,
        });
        res.json(Atu_usuario);
      }
    } catch (error) {
      res.status(400).json({ error: 'Erro ao atualizar usuário.' });
    }
  };


  //Excluir um Usuário (DELETE):

  exports.excluirUsuario = async (req, res) => {
    const { idUser } = req.params;
    try {
      const Exc_usuario = await User.findByPk(idUser); // Consulta o usuário por ID
      if (!usuario) {
        res.status(404).json({ error: 'Usuário não encontrado.' });
      } else {
        await user.destroy();
        res.status(204).end(); // Retorna uma resposta sem conteúdo (usuário excluído com sucesso)
      }
    } catch (error) {
      res.status(400).json({ error: 'Erro ao excluir usuário.' });
    }
  };
  exports.listarUsuarios = async (req, res) => {
    try {
      const Lis_usuarios = await User.findAll(); // Consulta todos os usuários no banco de dados
      res.json(Lis_usuarios);
    } catch (error) {
      res.status(500).json({ error: 'Erro ao buscar usuários.' });
    }
  };

