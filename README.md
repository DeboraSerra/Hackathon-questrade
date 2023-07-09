# Hackathon-questrade

1) O que é um Hackthon?

	Um hackathon é um evento colaborativo em que profissionais de tecnologia se reúnem por um período limitado de tempo para desenvolver soluções inovadoras para um problema específico. Durante o evento, equipes formadas por desenvolvedores, designers e outros especialistas trabalham intensivamente em projetos de software ou hardware, promovendo a criatividade, a aprendizagem e a competição saudável, além de oferecerem oportunidades de networking e reconhecimento para os participantes.

2) Objetivo do Hackthon da Questrade:

	DESENVOLVER UMA PLATAFORMA ONLINE QUE PERMITA AOS USUÁRIOS SOLICITAREM EMPRÉSTIMOS E RECEBER DESCISÕES INSTANTÂNEAS COM BASE NA PONTUAÇÃO DE CRÉDITO.

3) Plano de Te3stes e Cenários de Testes conforme parâmetros estipulados no escopo do projeto e nas funcionalidades do produto.

  Objetivo: Desenvolver os cenários de testes conforme escopo do projeto para que possam eliminar ou mitigar possíveis erros no desenvolvimento da aplicação. 

#language: pt

Funcionalidade: Login

	#CENÁRIO POSITIVO

	@login_valido
	Cenário: Login_Valido 
  Dado que acesso a página de login de Empréstimo da Questrade
  Quando realizo o login com o e-mail "usuario007@questrade.com.br" e a senha "Questrade1234/"
  Então visualizo a home page do Empréstimo da Questrade

	#CENÁRIO NEGATIVO

	@login_invalido
	Cenário: Login_Invalido 
  Dado que acesso a página de login de Empréstimo da Questrade
  Quando realizo o login com o e-mail "nada@nada" e a senha "1234"
  Então visualizo a mensagem: "Atenção - e-mail ou usuário não encontrado."

Funcionalidade: Cadastro

	#CENÁRIO POSITIVO

	@cadastrar_usuário_cenario_0001
	Cenário: @cadastro_usuário_cenario_0001
	#Cadastrar_Usuário
 	Dado que acesso a página de login de Empréstimo da Questrade
 	Quando seleciono "Fazer Cadastro"
	Então acesso a "Tela de Cadastro"
	E preencho o cadastro com o "Nome da Pessoa"
	E preencho o cadastro com o "E-mail"
	E preencho o cadastro com o "CPF"
	E preencho o cadastro com o "Telefone"
	E preencho o cadastro com o "Comprovação da Renda"
	E preencho o cadastro com o "Senha"
	E preencho o cadastro com o "Senha Novamente para Confirmação"
	E clico em "CADASTRAR"
	Então é apresentada a mensagem "Cadastro Efetuado com Sucesso"

Funcionalidade: Solicitar Empréstimo

	#CENÁRIO POSITIVO

	@solicitar_empréstimo_cenario_0001
	Cenário: solicitar_empréstimo_cenario_0001
	#Solicitar Empréstimo
 	Dado que acesso a página de login de Empréstimo da Questrade
  Quando realizo o login com o e-mail "usuario007@questrade.com.br" e a senha "Questrade1234/"
  Então visualizo a home page do Empréstimo da Questrade
	E clico em "Peça seu empréstimo agora!"
	Então acesso a página de Formulário de Empréstimo
	E digito o "Valor do Empréstimo"
	E digito o "Número de parcelas"
	Então é visualizado o valor da parcela a ser paga

Funcionalidade: Atualizar dados cadastrais

	#CENÁRIO POSITIVO

	@atualizar_dados_cadastrais_cenario_0001
	Cenário: atualizar_dados_cadastrais_cenario_0001
	#Atualizar dados Cadastrais
 	Dado que acesso a página de login de Empréstimo da Questrade
  Quando realizo o login com o e-mail "usuario007@questrade.com.br" e a senha "Questrade1234/"
  Então visualizo a home page do Empréstimo da Questrade
	E clico em "Perfil"
	E seleciono "Atualizar dados cadastrais"
	Então acesso a página para alterar os dados cadastrais
	E digito o "Nome"
	E digito o "E-mail"
	E digito o "Telefone"
	E digito o "CPF"
	E clico em "ATUALIZAR"
	Então são atualizados os dados do usuário

Funcionalidade: Dashboard com Lista de Pagamentos

	#CENÁRIO POSITIVO

	@dashboard_com_lista_de_pagamentos_cenario_0001
	Cenário: dashboard_com_lista_de_pagamentos_cenario_0001
	#Dashboard com Lista de Pagamentos
 	Dado que acesso a página de login de Empréstimo da Questrade
  Quando realizo o login com o e-mail "usuario007@questrade.com.br" e a senha "Questrade1234/"
  Então visualizo a home page do Empréstimo da Questrade
	E clico em "Perfil"
	E seleciono "Dashboard com Lista de Pagamentos"
	Então acesso a página com as Faturas Pagas e Pendentes
