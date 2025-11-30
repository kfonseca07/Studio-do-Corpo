-- Criação do Banco de Dados
-- CREATE DATABASE IF NOT EXISTS studio_do_corpo_db;
-- USE studio_do_corpo_db;
CREATE DATABASE IF NOT EXISTS studio_do_corpo_db;
use studio_do_corpo_db;
-- 1. Tabela para o Personal Trainer
CREATE TABLE IF NOT EXISTS personal_trainer (
    id INT AUTO_INCREMENT PRIMARY KEY,
    nome VARCHAR(100) NOT NULL,
    cref VARCHAR(50) UNIQUE NOT NULL,
    email VARCHAR(100) UNIQUE NOT NULL,
    telefone VARCHAR(20),
    experiencia_anos INT,
    bio_descricao TEXT,
    foto_perfil_url VARCHAR(255) 
);

-- 2. Tabela para as Especialidades (muitos-para-muitos com Personal)
CREATE TABLE IF NOT EXISTS especialidade (
    id INT AUTO_INCREMENT PRIMARY KEY,
    nome VARCHAR(100) UNIQUE NOT NULL
);

-- Tabela de junção para Personal e Especialidades
CREATE TABLE IF NOT EXISTS personal_especialidade (
    personal_id INT,
    especialidade_id INT,
    PRIMARY KEY (personal_id, especialidade_id),
    FOREIGN KEY (personal_id) REFERENCES personal_trainer(id) ON DELETE CASCADE,
    FOREIGN KEY (especialidade_id) REFERENCES especialidade(id) ON DELETE CASCADE
);

-- 3. Tabela para os Alunos (muitos-para-um com Personal)
CREATE TABLE IF NOT EXISTS aluno (
    id INT AUTO_INCREMENT PRIMARY KEY,
    personal_id INT NOT NULL,
    nome VARCHAR(100) NOT NULL,
    email VARCHAR(100) UNIQUE,
    data_cadastro DATE,
    FOREIGN KEY (personal_id) REFERENCES personal_trainer(id) ON DELETE CASCADE
);

-- 4. Tabela para Fichas de Treino (para acompanhar a última ficha)
CREATE TABLE IF NOT EXISTS ficha_treino (
    id INT AUTO_INCREMENT PRIMARY KEY,
    aluno_id INT NOT NULL,
    data_criacao DATE NOT NULL,
    descricao TEXT,
    FOREIGN KEY (aluno_id) REFERENCES aluno(id) ON DELETE CASCADE
);

-- Exemplo de inserção de dados (opcional)
INSERT INTO personal_trainer (nome, cref, email, telefone, experiencia_anos, bio_descricao, foto_perfil_url) VALUES 
('Alexandre Rocha', '001234-G/MG', 'alexandre.rocha@studiocorpo.com', '(31) 99876-5432', 10, 'Personal Trainer com 10 anos de experiência...', '/src/Imagens/PerfilEstatico.png');

INSERT INTO especialidade (nome) VALUES 
('Treinamento Funcional'),
('Hipertrofia'),
('Reabilitação');

INSERT INTO personal_especialidade (personal_id, especialidade_id) VALUES 
(1, 1), 
(1, 2), 
(1, 3);

INSERT INTO aluno (personal_id, nome, email, data_cadastro) VALUES
(1, 'Mariana Silva', 'mariana@email.com', '2025-11-01'),
(1, 'João Pedro', 'joao@email.com', '2025-10-28');

select * from aluno