### 3.3.2 Processo 2 – REGISTRO DE TREINO E ACOMPANHAMENTO

![Exemplo de um Modelo AS-IS](../images/Registrando_Treino.png)
![Exemplo de um Modelo TO-BE](../images/Registrando_Treino2.png)


#### Detalhamento das atividades
Cadastro de alunos feito manualmente em planilhas.

Recepção recebe dados via formulário impresso.

Demora no registro de informações e conferência de dados.

Comunicação com professores feita por mensagens ou e-mail.

Controle de pagamentos feito manualmente, com risco de erros.

Relatórios de frequência e pagamentos gerados manualmente.

Dependência de papel e arquivos físicos, tornando o processo lento.


**Nome da atividade 1**

| **Campo**       | **Tipo**         | **Restrições** | **Valor default** |
| ---             | ---              | ---            | ---               |
| [Nome do campo] | [tipo de dados]  |                |                   |
| ***Exemplo:***  |                  |                |                   |
| login           | Caixa de Texto   | formato de e-mail |                |
| senha           | Caixa de Texto   | mínimo de 8 caracteres |           |

| **Comandos**         |  **Destino**                   | **Tipo** |
| ---                  | ---                            | ---               |
| [Nome do botão/link] | Atividade/processo de destino  | (default/cancel/  ) |
| ***Exemplo:***       |                                |                   |
| entrar               | Fim do Processo 1              | default           |
| cadastrar            | Início do proceso de cadastro  |                   |


**Nome da atividade 2**

| **Campo**       | **Tipo**         | **Restrições** | **Valor default** |
| ---             | ---              | ---            | ---               |
| [Nome do campo] | [tipo de dados]  |                |                   |
|                 |                  |                |                   |

| **Comandos**         |  **Destino**                   | **Tipo**          |
| ---                  | ---                            | ---               |
| [Nome do botão/link] | Atividade/processo de destino  | (default/cancel/  ) |
|                      |                                |                   |
