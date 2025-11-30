// Seleciona o botão hamburger e o menu
const hamburger = document.getElementById('hamburger');
const menu = document.querySelector('.main-nav');

if (hamburger && menu) {
  hamburger.addEventListener('click', () => {
    menu.classList.toggle('active');
  });
}


// Seleciona o formulário
const form = document.querySelector(".cadastro-form");

form.addEventListener("submit", async (event) => {
  event.preventDefault();

  // Coleta os valores
  const nome = document.getElementById("nome").value.trim();
  const celular = document.getElementById("celular").value.trim();
  const idade = document.getElementById("idade").value.trim();
  const email = document.getElementById("email").value.trim();
  const cpf = document.getElementById("cpf").value.trim();
  const infoMedicas = document.getElementById("infoMedicas").value.trim();

  // Expressões Regulares (Regex) 
  const regexNome = /^[A-Za-zÀ-ÿ\s]+$/;
  const regexCelular = /^[0-9]{11}$/;
  const regexIdade = /^[0-9]{1,2}$/;
  const regexEmail = /^[^\s@]+@[^\s@]+\.[a-z]{2,3}$/i;
  const regexCPF = /^[0-9]{11}$/;

  // Validações
  if (!regexNome.test(nome)) {
    alert(" O nome deve conter apenas letras e espaços.");
    return;
  }
  if (!regexCelular.test(celular)) {
    alert(" O celular deve conter exatamente 11 números (DDD + número).");
    return;
  }
  if (!regexIdade.test(idade)) {
    alert(" A idade deve conter apenas números e no máximo 2 dígitos.");
    return;
  }
  if (!regexEmail.test(email)) {
    alert(" O e-mail deve estar no formato válido (ex: exemplo@gmail.com).");
    return;
  }
  if (!regexCPF.test(cpf)) {
    alert(" O CPF deve conter exatamente 11 números.");
    return;
  }
  if (infoMedicas.length === 0) {
    alert(" O campo de informações médicas não pode estar vazio.");
    return;
  }


  //   ENVIAR OS DADOS PARA O BACKEND 
  try {
    const resposta = await fetch("http://localhost:3000/cadastro", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        nome,
        celular,
        idade,
        email,
        cpf,
        infoMedicas
      })
    });

    const resultado = await resposta.json();

    if (resposta.ok) {
      alert("Formulário preenchido com sucesso!\nVocê será redirecionado para a página inicial.");
      form.reset();
      setTimeout(() => {
        window.location.href = "/src/CodigoHtml/HomePage.html";
      }, 3000);
    } else {
      alert("Erro ao cadastrar: " + resultado.error);
    }

  } catch (erro) {
    console.error("Erro na requisição:", erro);
    alert("Não foi possível enviar os dados ao servidor.");
  }
});
