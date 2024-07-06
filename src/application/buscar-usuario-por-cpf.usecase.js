const { Either, AppError } = require("../shared/errors");

module.exports = function buscarUsuarioPorCPFUseCase({ usuarioRepository }) {
  if (!usuarioRepository) throw new AppError(AppError.dependencias);
  return async function ({ CPF }) {
    if (!CPF) throw new AppError(AppError.parametroObrigatoriosAusentes);
    const usuario = await usuarioRepository.buscaPorCPF(CPF);
    return Either.Right(usuario);
  };
};
