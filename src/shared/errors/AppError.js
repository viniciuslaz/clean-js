module.exports = class AppError extends Error {
  constructor(message) {
    super(message);
    this.message = message;
  }

  static dependencias = "Alguma dependência obrigatoria não foi fornecida";
  static parametroObrigatoriosAusentes =
    "Algum parametro obrigatorio não foi fornecido";
};
