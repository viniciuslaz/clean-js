module.exports = function cadastrarUsuarioUseCase({ usuariosRepository }) {
  if (!usuariosRepository) throw new Error("usuarioRepository nao fornecido");

  return async function ({ nome_completo, CPF, telefone, endereco, email }) {
    await usuariosRepository.cadastrar({
      nome_completo,
      CPF,
      telefone,
      endereco,
      email,
    });
  };
};
