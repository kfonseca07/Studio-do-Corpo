const express = require("express");
const cors = require("cors");
const mysql = require("mysql2");

const app = express();
app.use(cors());
app.use(express.json());

// CONEXÃO COM O BANCO
const connection = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "", 
  database: "studiodocorpo"
});

connection.connect((erro) => {
  if (erro) {
    console.log("Erro ao conectar ao banco:", erro);
  } else {
    console.log("Conectado com sucesso, AMÉM!!!!");
  }
});

// ROTA PARA RECEBER O FORMULÁRIO
app.post("/cadastro", (req, res) => {
  const { nome, celular, idade, email, cpf, infoMedicas } = req.body;

  const sql = `
    INSERT INTO aluno (nome, celular, idade, email, cpf, info_medicas)
    VALUES (?, ?, ?, ?, ?, ?)
  `;

  connection.query(
    sql,
    [nome, celular, idade, email, cpf, infoMedicas],
    (erro, result) => {
      if (erro) {
        console.error("Erro ao inserir:", erro);
        return res.status(500).json({ error: "Erro ao salvar no banco" });
      }

      res.json({ message: "Cadastro realizado com sucesso!" });
    }
  );
});

// INICIA O SERVIDOR
app.listen(3000, () => {
  console.log("Servidor rodando na porta 3000");
});
