> **Links Úteis**:
> - [Modelagem de Processos AS-IS x TO-BE](https://dheka.com.br/modelagem-as-is-to-be/)
> - [20 Dicas Práticas de Modelagem de Processos](https://dheka.com.br/20-dicas-praticas-de-modelagem-de-processos/)


### 3.1. Modelagem da situação atual (Modelagem AS IS)

##### MATRÍCULAR ALUNO

O processo AS IS de matrícula, começa com o aluno, motivado pela vontade de treinar. Primeiro, ele escolhe uma academia de sua preferência, em seguida seleciona um plano e realiza o pagamento. Após essa etapa, a responsabilidade passa para a recepção da academia.

Na recepção, o aluno é matriculado e verifica-se se ele já foi aluno anteriormente. Caso já tenha sido, seus dados são atualizados e a matrícula é reativada. Caso contrário, é criada uma nova matrícula. Independentemente do caminho seguido, o processo termina com o encaminhamento do aluno para a avaliação com o personal trainer.

Esse modelo mostra como o fluxo atual funciona, destacando que o aluno conduz as etapas iniciais (escolha e pagamento) enquanto a recepção cuida da parte administrativa (cadastro e matrícula). Além disso, a checagem de histórico evita duplicidade de registros e garante que todos os alunos sejam avaliados antes de iniciar os treinos.

<img width="4875" height="1485" alt="matriculando_aluno_AS_IS_img" src="https://github.com/user-attachments/assets/9d36e910-1382-4677-930c-f0aee7c3a3b9" />


#### CRIAR DE FICHA DE TREINO

Atualmente, o processo de criação da ficha de treino para um aluno em uma academia funciona de forma manual e envolve diferentes atores (recepção, personal trainer e o aluno).

O processo inicia-se quando o aluno realiza sua matrícula na recepção. Após a confirmação da matrícula, a recepção encaminha o aluno para o personal responsável pela avaliação inicial.

O personal trainer, então, realiza uma avaliação física e de saúde do aluno. Durante essa etapa, o personal verifica se o aluno possui restrições físicas ou de saúde que possam impactar em seu treinamento.

Caso o aluno não apresente restrições, o personal prossegue diretamente com a montagem da ficha de treino.

Caso o aluno possua restrições, estas precisam ser informadas diretamente pelo próprio aluno ao personal, geralmente de forma verbal, o que pode gerar atrasos e necessidade de esclarecimentos adicionais. Com base nessas informações, o personal adapta a ficha de treino de acordo com as limitações apresentadas.

Ao final, o resultado esperado do processo é a ficha de treino montada, personalizada conforme as condições do aluno.

Esse fluxo, embora funcional, depende fortemente da interação presencial entre recepção, aluno e personal, além de processos manuais e comunicação verbal, o que pode gerar retrabalho em casos de informações incompletas ou incorretas.

![BPMN_criacao_de_ficha_AS_IS_img](https://github.com/user-attachments/assets/e5701b85-b391-4f5f-bf3f-2e2ea248ca9e)




### 3.2. Descrição geral da proposta (Modelagem TO BE)


A proposta busca automatizar e digitalizar o processo de matrícula, avaliação e acompanhamento de treinos dos alunos na academia, reduzindo gargalos do modelo atual (AS-IS), que é baseado em comunicação presencial e registros manuais.


#### MATRÍCULAR ALUNO

O processo TO BE de matrícula em uma academia começa com o aluno, que ao decidir treinar, escolhe a academia e acessa a aplicação web disponibilizada. Em seguida, ele escolhe o plano e ao entrar em contato via WhatsApp recebe um formulário digital para preencher. Esse formulário é encaminhado para a recepção, que dará continuidade ao processo.

Depois, o aluno escolhe a forma de pagamento, que pode ser cartão de crédito, débito ou à vista. Independentemente da opção escolhida, o fluxo segue para a etapa de efetuar o pagamento.

Na recepção, após o recebimento do formulário, o aluno é matriculado e verifica-se se já foi aluno anteriormente. Caso já tenha sido, seus dados são atualizados e o login é reativado. Caso contrário, um novo login é criado. Em ambos os casos, o sistema envia o login e a senha por e-mail.

Paralelamente, o aluno também é encaminhado para a avaliação com o personal trainer, garantindo o acompanhamento inicial. O processo se encerra com essas duas entregas: acesso ao sistema e avaliação física.

<img width="6849" height="2250" alt="matriculando_aluno_TO_BE_img" src="https://github.com/user-attachments/assets/458aba86-80c4-4405-b6ee-525827bf17a0" />


#### CRIAR DE FICHA DE TREINO

O processo de criação e acompanhamento da ficha de treino do aluno começa logo após a matrícula ser realizada. A recepção encaminha o aluno para o personal trainer, que faz a avaliação inicial. Durante essa avaliação, verifica-se se o aluno possui ou não restrições de saúde ou físicas.

Caso não possua restrições, o personal monta a ficha de treino diretamente na aplicação. Se houver restrições, o aluno informa essas condições e a ficha é montada levando em consideração essas limitações. Após a montagem, a ficha fica disponível para o aluno acompanhar na aplicação.

Com a ficha pronta, o personal acompanha o treino do aluno. Durante o processo, é avaliado se o treino foi bom ou ruim. Em qualquer dos casos, o treino é registrado na aplicação, permitindo que tanto o aluno quanto o personal tenham acesso às informações. O aluno pode acompanhar suas estatísticas pela aplicação, enquanto o personal utiliza esses dados para monitorar a evolução do aluno.

O processo termina quando o acompanhamento contínuo, feito com base nas estatísticas registradas, possibilita ao personal avaliar a evolução do aluno e ajustar os treinos conforme necessário. Esse fluxo garante maior integração entre aluno, personal e tecnologia, tornando o acompanhamento mais eficiente e personalizado.

![BPMN_criacao_de_ficha_TO_BE_img](https://github.com/user-attachments/assets/440f9f00-23a2-4616-b003-1aab16b8de3b)



Esse modelo TO BE mostra uma evolução em relação aos processos atuais, pois incorpora recursos digitais, dando maior autonomia ao aluno e reduzindo etapas presenciais. A recepção passa a ter um papel de validação e suporte, enquanto o fluxo de cadastro, pagamento e comunicação se torna mais automatizado e ágil.


### Limites da solução

- Exige que todos os usuários (alunos e funcionários) tenham acesso e familiaridade mínima com tecnologia.

- Necessidade de manutenção e atualização constante da aplicação.

- Dependência de conectividade com a internet para pleno funcionamento.

### Alinhamento estratégico

- Redução de retrabalho e falhas de comunicação.

- Melhor experiência do aluno, com autonomia e acompanhamento digital.

- Maior eficiência operacional e padronização dos processos.

- Geração de dados e estatísticas que apoiam a personalização do treino e decisões estratégicas da academia.

### Oportunidades de melhoria

- Registro digital centralizado (eliminando perdas de informação).

- Acompanhamento em tempo real da evolução do aluno.

- Automação de tarefas administrativas, liberando a recepção para atividades de maior valor.

- Feedback contínuo que gera dados para ajustes nos treinos.

- Maior satisfação e fidelização dos alunos por meio da personalização e praticidade.

### 3.3. Modelagem dos processos

[PROCESSO 1 - Matriculando Aluno](./processos/processo1_MatriculandoAluno.md "Detalhamento do Processo 1.")



[PROCESSO 2 - Registro de Treino e Acompanhamento](./processos/processo2_Registrando_Treino.md "Detalhamento do Processo 2.")
