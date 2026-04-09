-- Script de criação da tabela de tarefas
-- Banco: PostgreSQL
-- Utilizado no projeto To Do List 
CREATE TABLE IF NOT EXISTS tasks (
    id SERIAL PRIMARY KEY,
    title VARCHAR(255) NOT NULL,
    description TEXT,
    priority VARCHAR(20) NOT NULL,
    status VARCHAR(20) NOT NULL,
    creation_date TIMESTAMP NOT NULL
);