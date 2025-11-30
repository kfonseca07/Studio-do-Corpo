### 3.3.1 Processo 1 – MATRICULANDO ALUNO


![Exemplo de um Modelo BPMN - AS-IS](../images/Matriculando_aluno.png "")
![Exemplo de um Modelo BPMN - TO-BE](../images/Matriculando_aluno2.png "")


#### Detalhamento das atividades

Processo com muitas etapas e canais (web, WhatsApp, e-mail).

Preenchimento de formulário digital via recepção.

Escolha de plano e forma de pagamento feita separadamente.

Recepção precisa verificar se o aluno já foi cadastrado.

Criação ou reativação de login feita manualmente.

Encaminhamento para avaliação física após várias etapas.




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
