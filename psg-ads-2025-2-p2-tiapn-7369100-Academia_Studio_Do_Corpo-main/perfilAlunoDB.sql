CREATE DATABASE StudioDoCorpo;
USE StudioDoCorpo;

CREATE TABLE Alunos (
    Id INT PRIMARY KEY,
    Nome VARCHAR(100) NOT NULL,
    Plano VARCHAR(50) NOT NULL,
    Telefone VARCHAR(20),
    Email VARCHAR(100),
    Descricao TEXT
);

INSERT INTO Alunos (Id, Nome, Plano, Telefone, Email, Descricao) 
VALUES
	(123,'Davi Santana', 'Mensal', '(31) 12345-6789', 'davi@gmail.com', 'Não possui restrições');

UPDATE Alunos
SET Descricao = 'Não possui restrições, aluno que pratica treinos todos os dias e com excelente execução'
WHERE Id = 123;
SELECT * FROM Alunos;

