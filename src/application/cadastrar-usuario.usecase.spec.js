const AppError = require("../shared/errors/AppError");
const cadastrarUsuarioUseCase = require("./cadastrar-usuario.usecase");

describe("Cadastrar usuario UseCase", function () {
  const usuariosRepository = {
    cadastrar: jest.fn(),
    existePorCPF: jest.fn(),
  };
  test("Deve poder cadastrar um usuario", async function () {
    const usuarioDTO = {
      nome_completo: "nome_valido",
      CPF: "CPF_valido",
      telefone: "telefone_valido",
      endereco: "endereco_valido",
      email: "email_valido",
    };

    const sut = cadastrarUsuarioUseCase({ usuariosRepository });
    const output = await sut(usuarioDTO);

    expect(output).toBeUndefined();
    expect(usuariosRepository.cadastrar).toHaveBeenCalledWith(usuarioDTO);
    expect(usuariosRepository.cadastrar).toHaveBeenCalledTimes(1);
  });

  test("Deve retornar um throw AppError se o usuariosRepository nao for fornecido", function () {
    expect(() => cadastrarUsuarioUseCase({})).toThrow(
      new AppError(AppError.dependencias)
    );
  });

  test("Deve retornar um throw AppError se algum parametro obrigatorio nao for fornecido", async function () {
    const sut = cadastrarUsuarioUseCase({ usuariosRepository });

    await expect(() => sut({})).rejects.toThrow(
      new AppError(AppError.parametroObrigatoriosAusentes)
    );
  });

  test("Deve retornar um throw AppError se ja existir um cadastro com o CPF", async function () {
    usuariosRepository.existePorCPF.mockResolvedValue(true);
    const usuarioDTO = {
      nome_completo: "nome_valido",
      CPF: "CPF_ja_cadastrado",
      telefone: "telefone_valido",
      endereco: "endereco_valido",
      email: "email_valido",
    };

    const sut = cadastrarUsuarioUseCase({ usuariosRepository });

    await expect(() => sut(usuarioDTO)).rejects.toThrow(
      new AppError("CPF já cadastrado")
    );
  });
});
