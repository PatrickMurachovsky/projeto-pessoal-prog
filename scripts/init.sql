CREATE TABLE "users" (
  id SERIAL PRIMARY KEY,
  nome varchar(100) NOT NULL,
  idade integer,
  email varchar(50) UNIQUE NOT NULL,
  senha varchar(20) NOT NULL
);

CREATE TABLE "tarefas" (
  id_tarefa SERIAL PRIMARY KEY,
  id_usuario INTEGER REFERENCES users(id),
  titulo varchar(50) NOT NULL,
  descricao varchar(350),
  duracao INTEGER,
  etiquetas VARCHAR(20)
);

ALTER TABLE "tarefas" ADD CONSTRAINT "tarefa" FOREIGN KEY ("id_usuario") REFERENCES "users" ("id");

INSERT INTO "users" (nome, idade, email, senha)
VALUES ('Joao', 20, 'joao@email.com', null),
('Marcos', 21, 'marcos@email.com', null),
('Patrick', 22, 'patrick@email.com', null)
