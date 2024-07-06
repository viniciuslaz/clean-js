const { Either } = require("../shared/errors");

module.exports = function buscarUsuarioPorCPFUseCase({ usuarioRepository }) {
  return async function ({ CPF }) {
    const usuario = await usuarioRepository.buscaPorCPF(CPF);
    return Either.Right(usuario);
  };
};
