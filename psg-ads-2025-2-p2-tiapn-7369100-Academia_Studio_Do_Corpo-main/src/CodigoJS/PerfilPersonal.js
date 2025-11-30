// A URL deve corresponder à porta do seu server.js
const API_BASE_URL = 'http://localhost:5500/api/personal'; 

const editModal = document.getElementById('edit-modal');
const modalCloseBtn = document.querySelector('.close-btn-modal');
const editForm = document.getElementById('edit-profile-form');
let currentPersonalData = {}; 

const photoInput = document.getElementById('edit-photo');
const photoPreview = document.getElementById('photo-preview');

async function carregarPerfil() {
    try {
        const personalId = 1; 
        const response = await fetch(`${API_BASE_URL}/${personalId}`); 
        
        if (!response.ok) {
            throw new Error(`Erro de rede ou servidor: ${response.status} ${response.statusText}`);
        }
        
        const personalData = await response.json();
        
        // Debug no console
        console.log("Dados recebidos da API:", personalData);
        
        currentPersonalData = personalData; 

        // Injeção de dados segura (Nome primeiro)
        document.getElementById('data-nome').textContent = personalData.nome || 'N/A';
        
        document.getElementById('personal-avatar').src = personalData.foto_perfil_url || '/src/Imagens/PerfilEstatico.png';
        photoPreview.src = personalData.foto_perfil_url || '/src/Imagens/PerfilEstatico.png'; 

        const crefElement = document.getElementById('personal-cref');
        if (crefElement) crefElement.textContent = `CREF: ${personalData.cref || 'N/A'}`;
        
        document.getElementById('data-email').textContent = personalData.email || 'N/A';
        document.getElementById('data-telefone').textContent = personalData.telefone || 'N/A';
        document.getElementById('data-experiencia').textContent = `${personalData.experiencia_anos || 0} anos`;
        
        document.getElementById('data-especialidades').textContent = personalData.especialidades ? personalData.especialidades.join(', ') : 'Nenhuma';
        document.getElementById('data-bio').textContent = personalData.bio_descricao || 'Nenhuma biografia disponível.';
        
        carregarListaAlunos(personalData.alunos || []);

    } catch (error) {
        console.error('Falha ao carregar perfil:', error);
        document.getElementById('data-nome').textContent = 'Erro ao carregar dados. Verifique se o servidor backend está rodando na porta certa.';
    }
}

function carregarListaAlunos(alunos) {
    const alunoList = document.getElementById('aluno-list');
    if (alunoList) {
        alunoList.innerHTML = ''; 
        
        if (alunos.length === 0) {
            alunoList.innerHTML = '<li>Nenhum aluno cadastrado recentemente.</li>';
            return;
        }

        alunos.forEach(aluno => {
            const li = document.createElement('li');
            li.textContent = `${aluno.nome} (Última ficha: ${aluno.ultima_ficha})`;
            alunoList.appendChild(li);
        });
    }
}

function mostrarAlunos() {
    console.log('Função "Visualizar Alunos" acionada!');
    window.location.href = '/src/CodigoHtml/Gerenciamento.html'; 
}

function criarFicha() {
    console.log('Função "Criar Ficha" acionada!');
    window.location.href = '/src/CodigoHtml/CriarFicha.html'; 
}

function editarPerfil() {
    console.log('Função "Editar Perfil" acionada! Abrindo modal.');
    
    document.getElementById('edit-nome').value = currentPersonalData.nome || '';
    document.getElementById('edit-email').value = currentPersonalData.email || '';
    document.getElementById('edit-telefone').value = currentPersonalData.telefone || '';
    document.getElementById('edit-experiencia').value = currentPersonalData.experiencia_anos || '';
    document.getElementById('edit-bio').value = currentPersonalData.bio_descricao || '';
    
    photoPreview.src = currentPersonalData.foto_perfil_url || '/src/Imagens/PerfilEstatico.png';

    editModal.style.display = 'block';
}

async function enviarAtualizacaoPerfil(updatedData) {
    const personalId = updatedData.id;
    try {
        const response = await fetch(`${API_BASE_URL}/${personalId}`, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(updatedData),
        });

        if (!response.ok) {
            const errorData = await response.json(); 
            throw new Error(errorData.error || `Falha ao salvar. Status: ${response.status}`);
        }

        const result = await response.json();
        console.log('Sucesso na atualização de dados:', result.message);
        return true; 
    } catch (error) {
        console.error('Erro no envio da atualização de dados:', error.message);
        alert(`❌ Erro ao salvar perfil: ${error.message}`);
        return false; 
    }
}

async function enviarFotoPerfil(personalId, file) {
    const formData = new FormData();
    formData.append('profilePhoto', file); 

    try {
        const response = await fetch(`${API_BASE_URL}/${personalId}/upload-photo`, {
            method: 'POST',
            body: formData, 
        });

        if (!response.ok) {
            const errorData = await response.json();
            throw new Error(errorData.error || `Falha ao fazer upload da foto. Status: ${response.status}`);
        }

        const result = await response.json();
        console.log('Sucesso no upload da foto:', result.message);
        alert('✅ Foto de perfil atualizada com sucesso!');
        return true; 
    } catch (error) {
        console.error('Erro no upload da foto:', error.message);
        alert(`❌ Erro ao fazer upload da foto: ${error.message}`);
        return false; 
    }
}

photoInput.addEventListener('change', (event) => {
    const file = event.target.files[0];
    if (file) {
        const reader = new FileReader();
        reader.onload = (e) => {
            photoPreview.src = e.target.result;
        };
        reader.readAsDataURL(file);
    } else {
        photoPreview.src = currentPersonalData.foto_perfil_url || '/src/Imagens/PerfilEstatico.png';
    }
});

document.addEventListener('DOMContentLoaded', () => {
    console.log('Página carregada. Conectando à API...');
    carregarPerfil(); 
    
    const menuBtn = document.getElementById("menuBtn");
    const sideMenu = document.getElementById("sideMenu");
    const closeMenu = document.getElementById("closeMenu");

    if (menuBtn && sideMenu && closeMenu) {
        menuBtn.addEventListener("click", () => {
            sideMenu.classList.add("open");
        });

        closeMenu.addEventListener("click", () => {
            sideMenu.classList.remove("open");
        });
    }

    document.getElementById('btnVisualizarAlunos')?.addEventListener('click', mostrarAlunos);
    document.getElementById('btnCriarFicha')?.addEventListener('click', criarFicha);
    document.querySelector('.edit-btn')?.addEventListener('click', editarPerfil);
    
    modalCloseBtn.addEventListener('click', () => {
        editModal.style.display = 'none';
        carregarPerfil(); 
    });

    window.addEventListener('click', (event) => {
        if (event.target === editModal) {
            editModal.style.display = 'none';
            carregarPerfil(); 
        }
    });
    
    editForm.addEventListener('submit', async (e) => { 
        e.preventDefault();
        
        const personalId = currentPersonalData.id || 1;
        let dataUpdated = false;
        let photoUploaded = false;

        const updatedData = {
            id: personalId,
            nome: document.getElementById('edit-nome').value,
            email: document.getElementById('edit-email').value,
            telefone: document.getElementById('edit-telefone').value,
            experiencia_anos: parseInt(document.getElementById('edit-experiencia').value, 10) || 0,
            bio_descricao: document.getElementById('edit-bio').value
        };
        dataUpdated = await enviarAtualizacaoPerfil(updatedData);

        const file = photoInput.files[0];
        if (file) {
            photoUploaded = await enviarFotoPerfil(personalId, file);
        }

        if (dataUpdated || photoUploaded) {
            carregarPerfil();
        }

        editModal.style.display = 'none'; 
    });
});