// ---------- LISTA DE ALUNOS ----------
const alunosExemplo = [
  {id:1, nome:"Arthur da Silva", idade:25, plano:["Mensal"], status:"Ativo", login:"arthur", senha:"123"},
  {id:2, nome:"Kaique", idade:28, plano:["Trimestral"], status:"Ativo", login:"kaique", senha:"123"},
  {id:3, nome:"Camily", idade:22, plano:["Anual"], status:"Inativo", login:"camily", senha:"123"}
];

// ---------- CARREGAR ALUNOS ----------
function carregarAlunos() {
  const tbody = document.getElementById('listaAlunos');
  tbody.innerHTML = '';
  alunosExemplo.forEach(aluno => {
    const tr = document.createElement('tr');
    tr.innerHTML = `
      <td class="td-nome">${aluno.nome}</td>
      <td class="td-idade">${aluno.idade}</td>
      <td class="td-plano">${aluno.plano.join(", ")}</td>
      <td class="td-status">${aluno.status}</td>
      <td>
        <button onclick="abrirGerenciarAluno(${aluno.id})">Gerenciar</button>
        <button onclick="excluirAluno(${aluno.id})">Excluir</button>
        <button onclick="criarFichaAluno(${aluno.id})">Criar Ficha / Avaliação</button>
      </td>
    `;
    tbody.appendChild(tr);
  });
}

// ---------- GERENCIAR ALUNO ----------
function abrirGerenciarAluno(id) {
  const aluno = alunosExemplo.find(a => a.id === id);
  if(!aluno) return;

  document.getElementById('editId').value = aluno.id;
  document.getElementById('editNome').value = aluno.nome;
  document.getElementById('editIdade').value = aluno.idade;

  // Limpar checkboxes e marcar os planos existentes
  const checkboxes = document.querySelectorAll('#editPlanos input[type="checkbox"]');
  checkboxes.forEach(cb => cb.checked = aluno.plano.includes(cb.value));

  document.getElementById('editStatus').value = aluno.status;
  document.getElementById('editLogin').value = aluno.login;
  document.getElementById('editSenha').value = aluno.senha;

  document.getElementById('modalGerenciar').style.display = 'flex';
}

function salvarAlteracoesAluno() {
  const id = parseInt(document.getElementById('editId').value);
  const aluno = alunosExemplo.find(a => a.id === id);
  if(!aluno) return;

  aluno.nome = document.getElementById('editNome').value;
  aluno.idade = parseInt(document.getElementById('editIdade').value);

  // Pegar planos selecionados
  const planosSelecionados = Array.from(document.querySelectorAll('#editPlanos input[type="checkbox"]:checked')).map(cb => cb.value);
  aluno.plano = planosSelecionados.length ? planosSelecionados : ["Mensal"]; // Default se nada selecionado

  aluno.status = document.getElementById('editStatus').value;
  aluno.login = document.getElementById('editLogin').value;
  aluno.senha = document.getElementById('editSenha').value;

  carregarAlunos();
  fecharModal();
  alert("Aluno atualizado com sucesso!");
}

function fecharModal() {
  document.getElementById('modalGerenciar').style.display = 'none';
}

// ---------- EXCLUIR ALUNO ----------
function excluirAluno(id) {
  const index = alunosExemplo.findIndex(a => a.id === id);
  if(index !== -1){
    alunosExemplo.splice(index,1);
    carregarAlunos();
  }
}

// ---------- CRIAR NOVO ALUNO ----------
function toggleCriarAluno() {
  const form = document.getElementById('formCriarAluno');
  form.style.display = form.style.display === 'none' ? 'block' : 'none';
}

function criarAluno() {
  const nome = document.getElementById('novoNome').value;
  const idade = parseInt(document.getElementById('novoIdade').value);

  const planosSelecionados = Array.from(document.querySelectorAll('#novoPlanos input[type="checkbox"]:checked')).map(cb => cb.value);

  const status = document.getElementById('novoStatus').value;
  const login = document.getElementById('novoLogin').value;
  const senha = document.getElementById('novoSenha').value;

  if(!nome || !idade || !planosSelecionados.length || !status || !login || !senha){
    alert("Preencha todos os campos!");
    return;
  }

  const novo = {
    id: alunosExemplo.length ? alunosExemplo[alunosExemplo.length-1].id+1 : 1,
    nome,
    idade,
    plano: planosSelecionados.length ? planosSelecionados : ["Mensal"], // Inclui Pacote Funcional se selecionado
    status,
    login,
    senha
  };

  alunosExemplo.push(novo);
  carregarAlunos();
  alert("Aluno criado com sucesso!");

  // Limpar formulário
  document.getElementById('novoNome').value = '';
  document.getElementById('novoIdade').value = '';
  document.querySelectorAll('#novoPlanos input[type="checkbox"]').forEach(cb => cb.checked = false);
  document.getElementById('novoStatus').value = 'Ativo';
  document.getElementById('novoLogin').value = '';
  document.getElementById('novoSenha').value = '';
  toggleCriarAluno();
}

// ---------- FILTRAR ALUNOS ----------
document.getElementById('pesquisaAluno').addEventListener('input', function(){
  const termo = this.value.toLowerCase();
  const tbody = document.getElementById('listaAlunos');
  tbody.querySelectorAll('tr').forEach(tr=>{
    const nome = tr.children[0].textContent.toLowerCase();
    tr.style.display = nome.includes(termo) ? '' : 'none';
  });
});

// ---------- CRIAR FICHA / AVALIAÇÃO ----------
function criarFichaAluno(id) {
  const aluno = alunosExemplo.find(a => a.id === id);
  if(!aluno) return;
  alert(`Futura tela de criar ficha, editar formulário e avaliação para ${aluno.nome}`);
}

// ---------- CARROSSEL ----------
function previewImagem(input, idPreview){
  const file = input.files[0];
  if(file){
    const reader = new FileReader();
    reader.onload = () => document.getElementById(idPreview).src = reader.result;
    reader.readAsDataURL(file);
  }
}
['img1','img2','img3'].forEach((id,i)=>{
  document.getElementById(id).addEventListener('change', e=>previewImagem(e.target, `preview${i+1}`));
});
document.getElementById('formCarrossel').addEventListener('submit', e=>{
  e.preventDefault();
  alert("Carrossel atualizado (simulação).");
});

// ---------- BANNERS 3D ----------
['bannerEsquerdo','bannerDireito'].forEach(id=>{
  document.getElementById(id).addEventListener('change', e=>previewImagem(e.target, `preview${id.includes('Esquerdo') ? 'Esquerdo':'Direito'}`));
});
document.getElementById('formBanners3D').addEventListener('submit', e=>{
  e.preventDefault();
  alert("Banners 3D atualizados (simulação).");
});

// ---------- CARDS DE VALORES, PLANOS E SERVIÇOS ----------
function salvarValores(){
  alert("Valores atualizados (simulação).");
}
document.querySelectorAll('.btn-salvar').forEach(btn=>btn.addEventListener('click', salvarValores));

// ---------- INICIALIZAÇÃO ----------
window.addEventListener('DOMContentLoaded', ()=>{
  carregarAlunos();
});

// ----- MENU LATERAL -----
const menuBtn = document.getElementById("menuBtn");
const sideMenu = document.getElementById("sideMenu");
const closeMenu = document.getElementById("closeMenu");

menuBtn.addEventListener("click", () => {
  sideMenu.classList.add("open");
});

closeMenu.addEventListener("click", () => {
  sideMenu.classList.remove("open");
});

// -------- FILTROS --------
document.getElementById("filtroStatus").addEventListener("change", filtrarTabela);
document.getElementById("filtroPlano").addEventListener("change", filtrarTabela);
document.getElementById("filtroIdade").addEventListener("change", filtrarTabela);
document.getElementById("pesquisaAluno").addEventListener("keyup", filtrarTabela);

function filtrarTabela() {
  const status = document.getElementById("filtroStatus").value;
  const plano = document.getElementById("filtroPlano").value;
  const idade = document.getElementById("filtroIdade").value;
  const pesquisa = document.getElementById("pesquisaAluno").value.toLowerCase();

  const linhas = document.querySelectorAll("#listaAlunos tr");

  linhas.forEach(linha => {
    const nome = linha.querySelector(".td-nome").innerText.toLowerCase();
    const idadeAluno = Number(linha.querySelector(".td-idade").innerText);
    const planosAluno = linha.querySelector(".td-plano").innerText;
    const statusAluno = linha.querySelector(".td-status").innerText;

    let mostrar = true;

    // pesquisa
    if (pesquisa && !nome.includes(pesquisa)) {
      mostrar = false;
    }

    // status
    if (status && statusAluno !== status) {
      mostrar = false;
    }

    // plano
    if (plano && !planosAluno.includes(plano)) {
      mostrar = false;
    }

    // idade
    if (idade === "menor25" && idadeAluno >= 25) mostrar = false;
    if (idade === "25a35" && (idadeAluno < 25 || idadeAluno > 35)) mostrar = false;
    if (idade === "maior35" && idadeAluno <= 35) mostrar = false;

    linha.style.display = mostrar ? "" : "none";
  });
}

// -------- abas de gerenciamento --------
const tabs = document.querySelectorAll(".tab-btn");
const contents = document.querySelectorAll(".tab-content");

tabs.forEach(btn => {
  btn.addEventListener("click", () => {

    tabs.forEach(b => b.classList.remove("active"));
    btn.classList.add("active");

    contents.forEach(c => c.classList.remove("active"));
    document.getElementById(btn.dataset.tab).classList.add("active");
  });
});
