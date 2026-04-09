# Technical Test – Junior Developer
Este repositório contém a solução desenvolvida para o teste técnico de Desenvolvedor Júnior. O projeto é dividido em duas frentes independentes: um sistema de gerenciamento de tarefas (To Do List) e uma integração com APIs externas via Node-RED.

A estrutura do projeto segue as diretrizes solicitadas, apresentando separação clara entre front-end, back-end, banco de dados e fluxos de automação.

Tela Principal

As capturas de tela do sistema podem ser visualizadas no diretório de documentação.

[Tela Principal](./screenshots/to-do-list.png.png)

## Estrutura do Projeto
TesteTecnico/ │ ├── backend/ # Código fonte da API em ASP.NET Core │ └── backendTodo/ │ ├── frontend/ # Aplicação SPA em Angular │ ├── database/ # Scripts de criação e população do banco de dados │ └── script.sql │ ├── node-red/ # Exportação dos fluxos de integração (JSON) │ └── flows.json │ └── README.md

## Tecnologias Utilizadas

- Front-end

Angular
TypeScript
HTML / CSS
Bootstrap

- Back-end

C#
ASP.NET Core
Entity Framework Core
Banco de Dados -PostgreSQL

## Documentação da API (Swagger)
A API possui documentação interativa via Swagger para facilitar a visualização e o teste dos endpoints em tempo de execução.

Acesso local: http://localhost:5295/swagger

[Swagger](./screenshots/swagger.png.png)

## Rotas da API

Método Rota Descrição GET /api/task Lista todas as tarefas GET /api/task/{id} Busca uma tarefa específica por ID POST /api/task Cria uma nova tarefa PUT /api/task/{id} Atualiza os dados de uma tarefa existente DELETE /api/task/{id} Remove uma tarefa do sistema PUT /api/task/{id}/complete Marca uma tarefa como concluída

- Interface do Sistema
Criação de tarefa

[newTask](./screenshots/newtask.png.png)

Nesta seção, o usuário pode informar título, descrição e prioridade da tarefa.

## Decisões de Implementação

A arquitetura do projeto foi planejada para priorizar a simplicidade, clareza e o atendimento direto aos requisitos solicitados.

- Sobre a não utilização de DTOs e Service Layer

Para este teste específico, optou-se por uma estrutura enxuta. A utilização de camadas adicionais de abstração (como DTOs e Services) foi considerada desnecessária devido ao contexto de um CRUD simples com apenas uma entidade principal.

Em cenários de aplicações escaláveis com regras de negócio complexas, essas camadas seriam prontamente aplicadas para garantir melhor desacoplamento e manutenção.

## Integrações Node-RED

Desenvolvido de forma independente do sistema principal, o fluxo Node-RED contempla:

- Broker Catalog: consulta a API de corretoras da BrasilAPI e renderiza os dados em uma página web
- Zip Code Searcher: busca de endereços via CEP com tratamento de erros para formatos inválidos ou registros não encontrados
- Rotas Node-RED /cep (Interface de busca) /cep/search (Lógica de busca) /corretoras (Listagem de corretoras)


## Como Executar o Projeto

Pré-requisitos

.NET SDK 
Node.js e 
npm Angular CLI 
PostgreSQL 
Node-RED instalado globalmente

## Passo a passo

Configurar o banco de dados Execute o arquivo database/script.sql no seu servidor PostgreSQL.

- Executar o back-end

cd backend/
cd backendTodo 
dotnet run

- Executar o front-end

cd frontend 
ng serve

A aplicação estará disponível em: http://localhost:4200

- Executar o Node-RED
node-red

Acesse: http://localhost:1880

Importe o arquivo: node-red/flows.json

Autor: Giovane Rodrigues
Contato: 31-992568138
