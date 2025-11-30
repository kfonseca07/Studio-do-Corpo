# Especificações do Projeto

<span style="color:red">Pré-requisitos: <a href="01-Documentação de Contexto.md"> Documentação de Contexto</a></span>

A solução proposta será uma aplicação, acessível via navegador, composto por páginas públicas e áreas restritas. A parte pública terá informações institucionais, planos e formulário de contato. A parte restrita diferenciará as funções de alunos e administradores, permitindo acesso a treinos, pagamentos, agendamentos e gestão de cadastros. O sistema contará com APIs para autenticação e CRUD das entidades principais, além de um banco de dados estruturado para suportar todas as operações. 

- Video do dono do empreendimento

  https://github.com/user-attachments/assets/e275c239-0223-4082-8d6f-20ffebbfbe45

## Personas

Persona 1 – Funcionário (Instrutor/Personal Trainer) 

  

Nome: Ana Clara Martins 

Idade: 29 anos 

Profissão: Educadora Física / Instrutora de Academia 

Objetivos: 

-Gerenciar os treinos de seus alunos com eficiência. 

-Acompanhar o progresso dos alunos de forma estruturada. 

-Personalizar fichas de acordo com os objetivos de cada aluno. 

  

Dores/Problemas: 

  

-Controle de treinos feito apenas em papel, dificultando ajustes rápidos. 

-Necessidades do Sistema: 

-Área dedicada para cadastrar, alterar ou remover exercícios dos alunos. 

-Espaço para incluir observações ou instruções sobre a execução dos exercícios. 

-cesso facilitado ao histórico de treinos de cada aluno. 


Persona 2 – Administrador 

  

Nome: Lucas 

Idade: 45 anos 

Profissão: Proprietário / Gestor administrativo 

 

Objetivos: 

  

-Gerenciar alunos e mensalidades 

-Controlar os treinos disponíveis e atualizar a academia com novos exercícios 

  

Dores/Problemas: 

  

Controle manual de alunos e treinos é demorado e propenso a erros 

Necessidades do Sistema: 

-Adicionar e remover alunos 

-Acessar e atualizar mensalidades 

-Adicionar ou remover treinos disponíveis. 


Persona 3 – Aluno 

Nome: Mariana Souza 

Idade: 27 anos 

Profissão: Analista de Marketing 

Objetivos: 

-Acessar sua ficha de exercícios e gerenciar os treinos 

-Visualizar mensalidades e status de pagamento 

-Consultar o calendário de treinos 

-Dores/Problemas: 

-Dificuldade em acompanhar treinos e mensalidades sem um sistema digital 

-Necessidades do Sistema: 

-Área para cadastro e remoção de exercícios na ficha pessoal 

-Visualização de mensalidades e calendário de treinos 


## Histórias de Usuários

Com base na análise das personas forma identificadas as seguintes histórias de usuários:

-Eu, como personal trainer, gostaria de ter acesso a um espaço na aplicação para gerenciar os treinos dos meus alunos, incluindo ou retirando exercícios, e colocando instruções para realizar as execuções dos exercícios.            |

-Eu, como dono da academia, gostaria de administrar as matrículas dos alunos e as mensalidades, e supervisionar a questão do financeiro e treinos dos alunos. 

-Eu, como aluna, desejo acessar meus treinos e exercícios e gerenciar os mesmos através da aplicação, além de consultar as datas específicas dos treinos e controlar também as datas de vencimento das mensalidades. 


## Requisitos

As tabelas que se seguem apresentam os requisitos funcionais e não funcionais que detalham o escopo do projeto. Para determinar a prioridade de requisitos, aplicar uma técnica de priorização de requisitos e detalhar como a técnica foi aplicada.

### Requisitos Funcionais

|ID    | Descrição do Requisito  | Prioridade |
|------|-----------------------------------------|----|
|RF-001| O sistema deve permitir que o aluno acesse sua ficha de exercícios.  | ALTA | 
|RF-002| O sistema deve permitir que o aluno cadastre e remova exercícios de sua ficha.   | MÉDIA |
|RF-003| O sistema deve permitir que o aluno visualize suas mensalidades.    | MÉDIA |
|RF-004| O sistema deve permitir que o administrador acesse as mensalidades de todos os alunos. | MÉDIA |
|RF-005| O sistema deve permitir que o administrador cadastre e remova alunos.  | MÉDIA |
|RF-006| O sistema deve permitir que o administrador adicione e remova treinos disponíveis.  | MÉDIA |

### Requisitos não Funcionais

|ID     | Descrição do Requisito  |Prioridade |
|-------|-------------------------|----|
|RNF-001| O sistema deve possuir interface intuitiva e responsiva, adaptada a desktop e dispositivos móveis. |MÉDIA | 
|RNF-002| O sistema deve possuir autenticação diferenciada para alunos e administradores, com senhas criptografadas.  |  BAIXA | 
|RNF-003| O sistema deve garantir a integridade dos dados mesmo em caso de falhas de rede ou sistema. | MÉDIA | 
|RNF-004| DO sistema deve ser compatível com navegadores modernos (Chrome, Firefox, Edge).  |  BAIXA | 


## Restrições

O projeto está restrito pelos itens apresentados na tabela a seguir.

|ID| Restrição                                             |
|--|-------------------------------------------------------|
|01| O projeto deverá ser entregue até o final do semestre |
|02| Não pode ser desenvolvido um módulo de backend        |

Enumere as restrições à sua solução. Lembre-se de que as restrições geralmente limitam a solução candidata.

> **Links Úteis**:
> - [O que são Requisitos Funcionais e Requisitos Não Funcionais?](https://codificar.com.br/requisitos-funcionais-nao-funcionais/)
> - [O que são requisitos funcionais e requisitos não funcionais?](https://analisederequisitos.com.br/requisitos-funcionais-e-requisitos-nao-funcionais-o-que-sao/)
