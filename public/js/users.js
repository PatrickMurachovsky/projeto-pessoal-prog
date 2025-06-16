document.getElementById('form-cadastro')?.addEventListener('submit', function (event) {
  event.preventDefault();
  criarUsuario();
});

function carregarUsuarios() {
  fetch('/users')
    .then(res => res.json())
    .then(users => {
      const lista = document.getElementById('lista-usuarios');
      lista.innerHTML = '';
      users.forEach(user => {
        const li = document.createElement('li');
        li.textContent = `${user.nome} (${user.email})`;
        lista.appendChild(li);
      });
    });
}

function criarUsuario() {
  const nome = document.getElementById('nome').value;
  const idade = document.getElementById('idade').value;
  const email = document.getElementById('email').value;
  const senha = document.getElementById('senha').value;

  fetch('/users', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ nome, idade, email, senha })
  })
    .then(res => res.json())
    .then(() => {
      alert('Usuário criado!');
      carregarUsuarios();
    });
}

window.onload = carregarUsuarios;