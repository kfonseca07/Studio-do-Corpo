// login.js (atualizado)
document.addEventListener('DOMContentLoaded', function() {
    const loginForm = document.getElementById('loginForm');
    const userTypeButtons = document.querySelectorAll('.user-type-btn');
    let currentUserType = 'aluno';

    userTypeButtons.forEach(button => {
        button.addEventListener('click', function() {
            userTypeButtons.forEach(btn => btn.classList.remove('active'));
            this.classList.add('active');
            currentUserType = this.getAttribute('data-type');
        });
    });

    loginForm.addEventListener('submit', async function(e) {
        e.preventDefault();
        
        const username = document.getElementById('username').value;
        const password = document.getElementById('password').value;
        
        if (!username || !password) {
            showMessage('Por favor, preencha todos os campos.', 'error');
            return;
        }

        await fazerLogin(username, password);
    });

    async function fazerLogin(username, password) {
        showMessage('Entrando...', 'loading');
        
        try {
            const response = await fetch('api/login.php', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    username: username,
                    password: password
                })
            });
            
            const data = await response.json();
            
            if (data.success) {
                showMessage('Login realizado com sucesso!', 'success');
                
                // Redirecionar baseado no tipo de usuário
                setTimeout(() => {
                    switch(data.user_type) {
                        case 'Aluno':
                            window.location.href = '/CodigoHtml/PerfilAluno.html';
                            break;
                        case 'Personal':
                            window.location.href = '/CodigoHtml/PerfilPersonal.html';
                            break;
                        case 'Administrador':
                            window.location.href = '/CodigoHtml/Gerenciamento.html';
                            break;
                        default:
                            window.location.href = '/CodigoHtml/HomePage.html';
                    }
                }, 1500);
            } else {
                showMessage(data.message, 'error');
            }
        } catch (error) {
            console.error('Erro:', error);
            showMessage('Erro ao conectar com o servidor.', 'error');
        }
    }

    function showMessage(message, type) {
        const existingMessage = document.querySelector('.login-message');
        if (existingMessage) {
            existingMessage.remove();
        }

        const messageDiv = document.createElement('div');
        messageDiv.className = `login-message alert alert-${type === 'error' ? 'danger' : type === 'success' ? 'success' : 'info'}`;
        messageDiv.textContent = message;
        messageDiv.style.marginTop = '1rem';
        messageDiv.style.textAlign = 'center';

        loginForm.appendChild(messageDiv);

        if (type !== 'loading') {
            setTimeout(() => {
                messageDiv.remove();
            }, 3000);
        }
    }
});