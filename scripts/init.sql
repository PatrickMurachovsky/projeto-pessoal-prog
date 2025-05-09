CREATE TABLE "users" (
  "id" SERIAL PRIMARY KEY,
  "nome" varchar(100),
  "idade" integer,
  "email" varchar(50),
  "senha" varchar(20)
);

CREATE TABLE "tarefas" (
  "id_tarefa" SERIAL PRIMARY KEY,
  "id_usuario" INT,
  "titulo" varchar(50),
  "descricao" varchar(350),
  "duracao" int,
  "etiquetas" varchar(20)
);

ALTER TABLE "tarefas" ADD CONSTRAINT "tarefa" FOREIGN KEY ("id_usuario") REFERENCES "users" ("id");

INSERT INTO "users" (nome, idade, email, senha)
VALUES ('Joao', 20, 'joao@email.com', null),
('Marcos', 21, 'marcos@email.com', null),
('Patrick', 22, 'patrick@email.com', null)
