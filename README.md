# Technical Test – Junior Developer

Este repositório contém a solução desenvolvida para o teste técnico de Desenvolvedor Júnior, composta por duas partes independentes:

- Sistema de gerenciamento de tarefas - To Do List  
-  Integração com APIs externas utilizando Node-RED  

O projeto foi organizado seguindo a estrutura solicitada no teste, com separação entre front-end, back-end, banco de dados e fluxos do Node-RED.

---

##  Tela principal

![Tela principal](./screenshots/to-do-list.png.png)

---

##  Estrutura do projeto

```bash
TesteTecnico/
│
├── backend/
│   └── backendTodo/
│
├── frontend/
│
├── database/
│   └── script.sql
│
├── node-red/
│   └── flows.json
│
└── README.md
```bash

#Tecnologias utilizadas

Front-end
Angular
TypeScript
HTML
CSS
Bootstrap

Back-end
C#
ASP.NET Core
Entity Framework Core
Banco de dados
PostgreSQL
Swagger

A API também conta com documentação via Swagger para facilitar os testes dos endpoints.

Acesso:

http://localhost:5295/swagger

#Rotas da API
Método	Rota	Descrição
GET	/api/task	Lista todas as tarefas
GET	/api/task/{id}	Busca uma tarefa por ID
POST	/api/task	Cria uma tarefa
PUT	/api/task/{id}	Atualiza uma tarefa existente
DELETE	/api/task/{id}	Remove uma tarefa
PUT	/api/task/{id}/complete	Marca como concluída

Formulário de criação de tarefa

Nesta seção, o usuário pode informar:

Título da tarefa
Descrição
Prioridade

Após isso, basta clicar em Adicionar tarefa.

Ações das tarefas

Cada tarefa permite:

Concluir
Editar
Excluir
Decisões de implementação

Para este teste, a escolha foi manter a solução mais direta e objetiva, priorizando:

Simplicidade
Clareza
Legibilidade
Foco nos requisitos solicitados
❗ Por que não foram utilizados DTOs e camada de Service?

Neste projeto, a estrutura foi mantida propositalmente mais enxuta por se tratar de um CRUD pequeno e com regras simples.

A utilização de DTOs e uma camada de Service poderia adicionar mais complexidade estrutural do que benefício real para este contexto.

Como a aplicação possui:

Apenas uma entidade principal
Operações diretas de CRUD
Regras de negócio simples

A implementação foi mantida de forma objetiva, com menor nível de abstração.

Em um projeto maior, com múltiplas entidades e regras mais complexas, DTOs e Services seriam recomendados.

## Node-RED

A parte do Node-RED foi feita separadamente do sistema To Do List, conforme solicitado no teste.

Broker Catalog

Consulta a API de corretoras da BrasilAPI e exibe as informações em página web.

Zip Code Searcher

Permite pesquisar um CEP e exibir:

Rua
Bairro
Cidade
Estado

Também foi feito tratamento para:

CEP inválido
CEP não encontrado
🔗 Rotas Node-RED
/cep
/cep/search
/corretoras

## Como executar o projeto
Pré-requisitos

Antes de executar, é necessário ter instalado:

.NET SDK
Node.js
Angular CLI
PostgreSQL
Node-RED
Instalar Angular CLI
npm install -g @angular/cli
Instalar Node-RED
npm install -g --unsafe-perm node-red
- Executando o Back-end
cd backend
cd backendTodo
dotnet run
▶️ Executando o Front-end
cd frontend
npm install
ng serve

Acesse:

http://localhost:4200
▶️ Executando o Node-RED
node-red

Acesse:

http://localhost:1880
http://localhost:1880/cep
http://localhost:1880/corretoras

Importe:

/node-red/flows.json
👨‍💻 Autor

Giovane Rodrigues
📱 31-992568138
