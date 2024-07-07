## Reuniao

> Somos um biblioteca pequena e gostariamos de controlar a nossa entrada e saida de livros. Queremos cadastrar o usuario que ira pegar o livro emprestado, cadastrar os livros da nossa biblioteca e poder emprestar os livros para qualquer usuario, alem de buscar os registros de emprestimos.

## Dados

- Usuario: [nome_completo, CPF, telefone, endereco, email]
- Livro: [nome, quantidade, autor, genero, ISBN]
- Emprestimo: [usuario_id, livro_id, data_retorno, data_devolucao, data_saida]

## UseCases (Regras de negocio)

[x] Cadastrar um novo usuario
[x] - CPF ou email devem ser unicos

[x] Buscar um cadastro de usuario por CPF
[x] - Retornar um usuario ou vazio

[] Cadastrar um novo livro
[] - ISBN deve ser unico

[] Buscar um livro por nome ou ISBN
[] - Retornar os livro ou vazio

[] Emprestar um livro ao usuario
[] - A data de retorno nao pode ser menor que a data de saida
[] - Um usuario nao pode estar com mais de um livro com o mesmo ISBN ao mesmo tempo
[] - Um usuario pode estar com mais de um livro com ISBN diferentes ao mesmo tempo
[] - Ao cadastrar um emprestimo, sera enviado um email automaticamente informando o nome do livro, nome do usuario, CPF, a data de saida e a data de retorno

[] Devolver o livro emprestado
[] - Caso o usuario tenha atrasado, sera gerada uma multa fixa de R$ 10,00

[] Mostrar todos os emprestimos pendentes, com o nome do livro, nome do usuario, CPF, data de saida e data de retorno. Ordenados pela data de retorno mais antiga

## Estruturas

##UsuariosRepository
[] cadastrar: ({nome_completo, CPF, telefone, endereco, email}) => Promise<void>
[] existePorCPF((CPF) => Promise<boolean>)
[] existePorEmail((email) => Promise<boolean>)
