const validarTarefa = (req, res, next) => {

  const { titulo, status } = req.body;

  if (!titulo || !status) {
    return res.status(400).json({
      mensagem: "Título e status são obrigatórios"
    });
  }

  next();
};

module.exports = {
  validarTarefa
};