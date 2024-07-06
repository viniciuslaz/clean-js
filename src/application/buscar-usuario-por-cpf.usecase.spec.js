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
});
