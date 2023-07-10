<h1 style="text-align: center;">1º Hackathon Questrade - Back end</h1>

O back-end foi desenvolvido pelo [Douglas Aguiar](https://github.com/DouglasD18) com auxílio do [Diego Cavalcanti](https://github.com/diegotimao) e da [Débora Serra](https://github.com/DeboraSerra).
Ele foi desenvolvido utilizando Node.js, express e o banco de dados MySQL e consiste em um CRUD de usuário, onde é possível Criar, Ler, Atualizar e deletar os dados dos usuários.
Os dados armazenados são o CPF, considerado com id, email, nome, telefone, comprovante de renda, senha. Para armazenamento da senha no banco de dados foi utilizado a biblioteca bcrypt.

# Rotas
## POST /api/user/login
Essa rota recebe no body da requisição o cpf e a senha do usuário. A API então acessa o banco de dados utilizando o CPF e compara a senha encryptada, retornando um token gerado pela biblioteca jwt, contendo as informações do usuário.

## POST /api/user/register
A rota de criação de usuário recebe o objeto abaixo no corpo da requisição e caso todos os dados sejam validados, armazena os dados da pessoa usuária no banco de dados e retorna um token com as principais informações sobre essa pessoa.

As condições para criação da senha de usuário são: 
* conter uma letra maiúscula
* conter um número
* conter um caractere não alfanumérico
* ter no mínimo 8 caracteres

```
{
  cpf: string,
  name: string,
  email: string,
  proofOfIncome: string,
  password: string,
  phone: string,
}
```
## PUT /api/user/:cpf
A rota de edição de usuário recebe um objeto similar ao anterior, porém não é necessário enviar todas as informações, apenas o que será editado.
Após serem feitas as validações, os dados da pessoa usuária são então atualizados.

## DELETE /api/user/:cpf
Essa rota recebe o CPF da pessoa usuária como parâmetro de rota e deleta suas informações do banco de dados.

# Próximos passos
Como próximos passos para esse serviço destacamos:
* Criar uma rota para valização do token, tendo em vista que ele possui validade de 3 dias.
* Implementar a realização do cálculo de score da pessoa usuária e seu armazenamento no banco de dados, junto com informações sobre empréstimos solicitados/recebidos e seus pagamentos.
