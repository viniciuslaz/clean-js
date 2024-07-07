const { AppError } = require("../shared/errors");
const cadastrarLivroUsecase = require("./cadastrar-livro.usecase");

describe("Cadastrar Livro UseCase", () => {
  const livrosRepository = {
    cadastrar: jest.fn(),
  };
  test("Deve cadastrar um livro", async () => {
    const livroDTO = {
      nome: "nome_valido",
      quantidade: "quantidade_valida",
      autor: "autor_valido",
      genero: "genero_valido",
      ISBN: "ISBN_valido",
    };

    const sut = cadastrarLivroUsecase({ livrosRepository });
    const output = await sut(livroDTO);

    expect(output.right).toBeNull();
    expect(livrosRepository.cadastrar).toHaveBeenCalledWith(livroDTO);
    expect(livrosRepository.cadastrar).toHaveBeenCalledTimes(1);
  });

  test("Deve retornar um throw AppError se o livrosRepository nao for fornecido", function () {
    expect(() => cadastrarLivroUsecase({})).toThrow(
      new AppError(AppError.dependencias)
    );
  });
});
