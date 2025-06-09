// filepath: views/js/tarefas.js
// Buscar tarefas e exibir na tela
fetch('/api/tarefas')
  .then(res => res.json())
  .then(tarefas => {
    const lista = document.getElementById('lista-tarefas');
    lista.innerHTML = '';
    tarefas.forEach(tarefa => {
      const li = document.createElement('li');
      li.textContent = tarefa.titulo;
      lista.appendChild(li);
    });
  });

// Exemplo de função para criar tarefa
function criarTarefa(titulo) {
  fetch('/api/tarefas', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ titulo })
  })
  .then(res => res.json())
  .then(novaTarefa => {
    // Atualize a lista ou faça algo com novaTarefa
    alert('Tarefa criada!');
  });
}

app.use(express.static('views/js'));