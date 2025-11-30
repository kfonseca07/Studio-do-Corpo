async function carregarAluno(id) {
    try {
        const resposta = await fetch(`http://localhost:3000/alunos/${id}`);
        const aluno = await resposta.json();
        console.log("Dados recebidos:", aluno); 
        document.getElementById("id").innerText = 'Matrícula: ' + (aluno.id || '');
        document.getElementById("nome").innerText = aluno.nome || '';
        document.getElementById("plano").innerText = aluno.plano || '';
        document.getElementById("telefone").innerText = aluno.telefone || '';
        document.getElementById("email").innerText = aluno.email || '';
        document.getElementById("descricao").innerText = aluno.descricao || '';
    } catch(erro) {
        console.error("Erro ao carregar aluno:", erro);
    }
}

carregarAluno(123);
