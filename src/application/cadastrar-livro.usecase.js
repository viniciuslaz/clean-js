const { Either, AppError } = require("../shared/errors");

module.exports = function cadastrarLivroUseCase({ livrosRepository }) {
  if (!livrosRepository) throw new AppError(AppError.dependencias);
  return async function cadastrarLivro({
    nome,
    quantidade,
    autor,
    genero,
    ISBN,
  }) {
    await livrosRepository.cadastrar({ nome, quantidade, autor, genero, ISBN });
    return Either.Right(null);
  };
};
