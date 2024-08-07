const { AppError } = require("../shared/errors");
const buscarUsuarioPorCpfUsecase = require("./buscar-usuario-por-cpf.usecase");

describe("Buscar usuario por CPF UseCase", function () {
  const usuarioRepository = {
    buscaPorCPF: jest.fn(),
  };

  test("Deve retornar um usuario caso o CPF esteja cadastrado", async function () {
    const cpfDTO = {
      CPF: "CPF_cadastrado",
    };

    const outputDTO = {
      id: "qualquer_ID",
      nome: "qualquer_nome",
      CPF: "CPF_cadastrado",
      email: "qualquer_email",
      telefone: "qualquer_telefone",
    };
    usuarioRepository.buscaPorCPF.mockResolvedValue(outputDTO);

    const sut = buscarUsuarioPorCpfUsecase({ usuarioRepository });
    const output = await sut(cpfDTO);

    expect(output.right).toEqual(outputDTO);
    expect(usuarioRepository.buscaPorCPF).toHaveBeenCalledWith(cpfDTO.CPF);
    expect(usuarioRepository.buscaPorCPF).toHaveBeenCalledTimes(1);
  });

  test("Deve retornar null caso o CPF não esteja cadastrado", async function () {
    const cpfDTO = {
      CPF: "CPF_nao_cadastrado",
    };

    usuarioRepository.buscaPorCPF.mockResolvedValue(null);

    const sut = buscarUsuarioPorCpfUsecase({ usuarioRepository });
    const output = await sut(cpfDTO);

    expect(output.right).toBeNull();
    expect(usuarioRepository.buscaPorCPF).toHaveBeenCalledWith(cpfDTO.CPF);
    expect(usuarioRepository.buscaPorCPF).toHaveBeenCalledTimes(1);
  });

  test("Deve retornar um throw AppError se o usuariosRepository não for fornecido", function () {
    expect(() => buscarUsuarioPorCpfUsecase({})).toThrow(
      new AppError(AppError.dependencias)
    );
  });

  test("Deve retornar um throw AppError se o CPF não for fornecido", async function () {
    const sut = buscarUsuarioPorCpfUsecase({ usuarioRepository });

    await expect(() => sut({})).rejects.toThrow(
      new AppError(AppError.parametroObrigatoriosAusentes)
    );
  });
});
