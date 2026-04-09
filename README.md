Este é um README reformulado para o seu teste técnico. Removi os ícones conforme solicitado, melhorei a estrutura para um padrão mais profissional e ajustei o caminho das imagens para garantir que a renderização funcione corretamente em repositórios Git.Technical Test – Junior DeveloperEste repositório contém a solução desenvolvida para o teste técnico de Desenvolvedor Júnior. O projeto é dividido em duas frentes independentes: um sistema de gerenciamento de tarefas (To Do List) e uma integração com APIs externas via Node-RED.A estrutura do projeto segue as diretrizes solicitadas, apresentando separação clara entre front-end, back-end, banco de dados e fluxos de automação.Tela PrincipalAs capturas de tela do sistema podem ser visualizadas no diretório de documentação:Caminho da imagem: ./screenshots/to-do-list.pngEstrutura do ProjetoPlaintextTesteTecnico/
│
├── backend/            # Código fonte da API em ASP.NET Core
│   └── backendTodo/
│
├── frontend/           # Aplicação SPA em Angular
│
├── database/           # Scripts de criação e população do banco de dados
│   └── script.sql
│
├── node-red/           # Exportação dos fluxos de integração (JSON)
│   └── flows.json
│
└── README.md
Tecnologias UtilizadasFront-endAngularTypeScriptHTML / CSSBootstrapBack-endC#ASP.NET CoreEntity Framework CoreBanco de DadosPostgreSQLDocumentação da API (Swagger)A API possui documentação interativa via Swagger para facilitar a visualização e o teste dos endpoints em tempo de execução.Acesso local: http://localhost:5295/swaggerRotas da APIMétodoRotaDescriçãoGET/api/taskLista todas as tarefasGET/api/task/{id}Busca uma tarefa específica por IDPOST/api/taskCria uma nova tarefaPUT/api/task/{id}Atualiza os dados de uma tarefa existenteDELETE/api/task/{id}Remove uma tarefa do sistemaPUT/api/task/{id}/completeMarca uma tarefa como concluídaDecisões de ImplementaçãoA arquitetura do projeto foi planejada para priorizar a simplicidade, clareza e o atendimento direto aos requisitos solicitados.Sobre a não utilização de DTOs e Service LayerPara este teste específico, optou-se por uma estrutura enxuta. A utilização de camadas adicionais de abstração (como DTOs e Services) foi considerada desnecessária devido ao contexto de um CRUD simples com apenas uma entidade principal. Em cenários de aplicações escaláveis com regras de negócio complexas, essas camadas seriam prontamente aplicadas para garantir o desacoplamento.Integrações Node-REDDesenvolvido de forma independente do sistema principal, o fluxo Node-RED contempla:Broker Catalog: Consulta a API de corretoras da BrasilAPI e renderiza os dados em uma página web.Zip Code Searcher: Busca de endereços via CEP com tratamento de erros para formatos inválidos ou registros não encontrados.Rotas Node-RED/cep (Interface de busca)/cep/search (Lógica de busca)/corretoras (Listagem de corretoras)Como Executar o ProjetoPré-requisitos.NET SDKNode.js e npmAngular CLIPostgreSQLNode-RED instalado globalmentePasso a PassoConfigurar o Banco de Dados:Execute o arquivo database/script.sql no seu servidor PostgreSQL.Executar o Back-end:Bashcd backend/backendTodo
dotnet run
Executar o Front-end:Bashcd frontend
npm install
ng serve
Acesse: http://localhost:4200Executar o Node-RED:Bashnode-red
Acesse http://localhost:1880 e importe o arquivo node-red/flows.json.Autor: Giovane RodriguesContato: 31 99256-8138
