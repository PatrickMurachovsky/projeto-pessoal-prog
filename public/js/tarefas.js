function carregarTarefas() {
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
}

function criarTarefa() {
  const titulo = document.getElementById('novo-titulo').value;
  if (!titulo) return alert('Digite um título');

  fetch('/api/tarefas', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ titulo })
  })
    .then(res => res.json())
    .then(() => {
      alert('Tarefa criada!');
      carregarTarefas();
    });
}

window.onload = carregarTarefas;