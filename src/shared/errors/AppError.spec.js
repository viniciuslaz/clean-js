const AppError = require("./AppError");

describe("AppError", function () {
  test("AppError e uma instancia de Error", function () {
    const appError = new AppError("erro");
    expect(appError).toBeInstanceOf(Error);
  });

  test("AppError contem a mensagem correta", function () {
    const mensagem = "mensagem de erro";
    const appError = new AppError(mensagem);
    expect(appError.message).toBe(mensagem);
  });
});
