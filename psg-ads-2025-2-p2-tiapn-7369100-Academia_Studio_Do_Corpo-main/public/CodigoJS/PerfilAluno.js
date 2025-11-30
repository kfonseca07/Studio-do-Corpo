const express = require('express');
const path = require('path');
const mysql = require('mysql2');
const cors = require('cors');

const app = express();
app.use(cors());
app.use(express.json());
app.use(express.static(path.join(__dirname, '../../')));


// Conexão com MySQL - ATUALIZE COM SUAS CREDENCIAIS
const db = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'Davisantana123#',
    dialect: 'mysql',
    database: 'StudioDoCorpo'
});

db.connect(err => {
    if (err) {
        console.log("Erro ao conectar:", err);
        return;
    }
    console.log("MySQL conectado!");

    db.query("SELECT DATABASE() AS db", (err, result) => {
        console.log("Banco conectado:", result);
    });
});

// Rota para pegar todos os alunos
app.get('/alunos', (req, res) => {
    const sql = "SELECT * FROM Alunos";
    db.query(sql, (err, data) => {
        if (err) return res.json(err);
        return res.json(data);
    });
});

// Rota para pegar um aluno pelo ID
app.get('/alunos/:id', (req, res) => {
    const id = req.params.id;
    db.query("SELECT * FROM Alunos WHERE Id = ?", [id], (err, data) => {
        if (err) return res.json(err);
        return res.json(data[0]);
    });
});


app.listen(3000, () => {
    console.log("Servidor rodando na porta 3000");
    console.log("http://localhost:3000/src/CodigoHtml/PerfilAluno.html");
});