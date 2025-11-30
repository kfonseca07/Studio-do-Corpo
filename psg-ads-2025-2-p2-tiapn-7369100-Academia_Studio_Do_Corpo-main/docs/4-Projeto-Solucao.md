## 4. Projeto da Solução

## 4.1. Arquitetura da solução


A arquitetura define a interação entre usuário, sistema e banco de dados:
Usuário acessa via navegador;

Front-end exibe as interfaces e envia requisições;

Back-end processa ações, valida dados e interage com o banco;

Banco de Dados (MySQL) armazena e retorna as informações.


![Imagem do WhatsApp de 2025-10-24 à(s) 13 41 25_fcf7726c](https://github.com/user-attachments/assets/dd79b18b-f232-4363-9738-7a7f66bae635)

 

### 4.2. Protótipos de telas

<img width="693" height="713" alt="image" src="https://github.com/user-attachments/assets/78904a54-99bb-4ec3-9071-b1d7938e7875" />


<img width="290" height="216" alt="image" src="https://github.com/user-attachments/assets/9c65c3f1-7dde-471d-8211-d94679053f45" />    <img width="287" height="212" alt="image" src="https://github.com/user-attachments/assets/777ff492-eaf3-4c13-8a9d-fc75535b9cea" />
<img width="286" height="211" alt="image" src="https://github.com/user-attachments/assets/d9f4bfd7-0de5-4d7e-a005-e4827241a88f" />    <img width="298" height="219" alt="image" src="https://github.com/user-attachments/assets/445c3399-add4-488f-b7fe-d1105dfad980" />
<img width="280" height="212" alt="image" src="https://github.com/user-attachments/assets/8a809aa2-0d16-40c0-92a2-72a09deaa022" />    <img width="290" height="218" alt="image" src="https://github.com/user-attachments/assets/f76c2b85-657a-44d1-9c20-e81147a3b02a" />
<img width="288" height="215" alt="image" src="https://github.com/user-attachments/assets/093854c0-ccca-4630-8ddb-725734c3e39b" />    <img width="288" height="213" alt="image" src="https://github.com/user-attachments/assets/f71c7ca0-17ce-4c0d-a47f-577c68256e5b" />
<img width="306" height="227" alt="image" src="https://github.com/user-attachments/assets/4482fd4e-7d78-4b56-86f7-0b763f72d25a" />    <img width="292" height="215" alt="image" src="https://github.com/user-attachments/assets/f681d0cf-bc5f-4c84-8e65-6116bb322d0a" />

### 4.2.1 Processos

<img width="631" height="336" alt="image" src="https://github.com/user-attachments/assets/6cabaa06-16ae-4ce9-bf3a-51bc0c3bf361" />
<img width="631" height="296" alt="image" src="https://github.com/user-attachments/assets/e8830986-a0a4-4df0-8af6-4fa6d0d344a0" />


### 4.3. Modelo de dados

A solução proposta para o sistema da academia Studio do Corpo será desenvolvida utilizando tecnologias modernas e acessíveis voltadas para aplicações web. O objetivo será proporcionar um ambiente dinâmico, responsivo e fácil de manter. 

O Front-end será construído com as linguagens HTML, CSS e JavaScript, responsáveis pela estrutura, estilo e interatividade das páginas. O framework Bootstrap será utilizado para facilitar a criação de interfaces responsivas, garantindo uma boa experiência de uso em diferentes dispositivos. 

O Back-end utilizará JavaScript em conjunto com MySQL, que atuará como banco de dados para armazenamento das informações de alunos, personal trainers e administradores. O sistema realizará a conexão entre as páginas e o banco de dados por meio de scripts JavaScript integrados. 

O ambiente de desenvolvimento será implementado no Visual Studio Code (VS Code), que funcionará como IDE principal para edição e testes do código. Para a modelagem conceitual e lógica do banco de dados, serão utilizadas as ferramentas BR Modelo e Canva, que também auxiliarão na criação dos wireframes e diagramas do projeto. 

### 4.3.1 Modelo ER

O Modelo ER representa através de um diagrama como as entidades (coisas, objetos) se relacionam entre si na aplicação interativa.]

<img width="1204" height="852" alt="MODELO_CONCEITUAL_STUDIODOCORPO 1" src="https://github.com/user-attachments/assets/81304d5b-9e99-4f2a-be22-628790e501eb" />


### 4.3.2 Esquema Relacional

O Esquema Relacional corresponde à representação dos dados em tabelas juntamente com as restrições de integridade e chave primária.
 
<img width="926" height="827" alt="MODELO_LOGICO_STUDIODOCORPO 1" src="https://github.com/user-attachments/assets/9acd5196-d182-482e-9334-2a14bc906c01" />

---


### 4.3.3 Modelo Físico
```sql
CREATE DATABASE StudioDoCorpo;
USE StudioDoCorpo;

CREATE TABLE Academia (
    ID_academia INT AUTO_INCREMENT PRIMARY KEY,
    Nome VARCHAR(100) NOT NULL,
    CNPJ VARCHAR(20),
    Email VARCHAR(100),
    Telefone VARCHAR(20)
);

CREATE TABLE Personal (
    ID_personal INT AUTO_INCREMENT PRIMARY KEY,
    Nome VARCHAR(100) NOT NULL,
    CREF VARCHAR(20) NOT NULL,
    Telefone VARCHAR(20),
    Email VARCHAR(100)
);

CREATE TABLE Aluno (
    ID_aluno INT AUTO_INCREMENT PRIMARY KEY,
    Nome VARCHAR(100) NOT NULL,
    CPF VARCHAR(14) UNIQUE,
    Endereco VARCHAR(200),
    Telefone VARCHAR(20),
    Email VARCHAR(100),
    Data_nascimento DATE
);

CREATE TABLE Matricula (
    ID_matricula INT AUTO_INCREMENT PRIMARY KEY,
    ID_aluno INT NOT NULL,
    ID_academia INT NOT NULL,
    Data_matricula DATE NOT NULL,
    Status VARCHAR(20),

    FOREIGN KEY (ID_aluno) REFERENCES Aluno(ID_aluno),
    FOREIGN KEY (ID_academia) REFERENCES Academia(ID_academia)
);

CREATE TABLE Ficha_treino (
    ID_ficha INT AUTO_INCREMENT PRIMARY KEY,
    ID_aluno INT NOT NULL,
    ID_personal INT NOT NULL,
    Data DATE NOT NULL,
    Exercicios TEXT,
    Observacoes TEXT,

    FOREIGN KEY (ID_aluno) REFERENCES Aluno(ID_aluno),
    FOREIGN KEY (ID_personal) REFERENCES Personal(ID_personal)
);

CREATE TABLE Avaliacao (
    ID_avaliacao INT AUTO_INCREMENT PRIMARY KEY,
    ID_aluno INT NOT NULL,
    ID_personal INT NOT NULL,
    Data_avaliacao DATE NOT NULL,
    Peso DECIMAL(5,2),
    Altura DECIMAL(4,2),
    IMC DECIMAL(5,2),
    Observacoes TEXT,

    FOREIGN KEY (ID_aluno) REFERENCES Aluno(ID_aluno),
    FOREIGN KEY (ID_personal) REFERENCES Personal(ID_personal)
);

CREATE TABLE Pagamento (
    ID_pagamento INT AUTO_INCREMENT PRIMARY KEY,
    ID_aluno INT NOT NULL,
    Data_pagamento DATE,
    Data_vencimento DATE,
    Valor DECIMAL(10,2),
    Status VARCHAR(20),

    FOREIGN KEY (ID_aluno) REFERENCES Aluno(ID_aluno)
);

ALTER TABLE Personal
ADD COLUMN ID_academia INT,
ADD FOREIGN KEY (ID_academia) REFERENCES Academia(ID_academia);

```
[StudioDoCorpo.sql](https://github.com/user-attachments/files/23130915/StudioDoCorpo.sql)
### 4.4. Tecnologias

| **Dimensão**   | **Tecnologia**        |

| IDE            | VSCode+MySql          |

| SGBD           | MySQL+SQL             |

| Front end      | HTML+CSS+JS+BootStrap |

| Back end       | JS+SQL+MySQL+XAMPP    |

| Deploy         | Github Pages          |

| Model          | Canvas+brModelo       |

