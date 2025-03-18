# Descrição
Nesta atividade, você desenvolverá uma API REST em Node.js utilizando a arquitetura MVC para gerenciar projetos, 
tarefas e usuários. O armazenamento será feito temporariamente em arrays. O objetivo é reforçar os conceitos de 
separação de responsabilidades e manipulação de dados via API.

# Cenário
Uma empresa precisa de um sistema simples para gerenciar seus projetos. Cada projeto pode ter várias tarefas 
associadas e cada tarefa deve estar vinculada a um usuário responsável.

## Entidades do sistema:
* Usuário (User)
  * ID (numérico)
  * Nome
  * Email
  * Senha
* Projeto (Project)
  * ID (numérico)
  * Nome
  * Descrição
* Tarefa (Task)
  * ID (numérico)
  * Título
  * Status (concluído ou não)
  * ID do projeto (relacionamento)
  * ID do usuário responsável (relacionamento)

# Requisitos da API

1. Usuários (/api/users)
1.1 Criar usuário (POST)
1.2 Listar todos os usuários (GET)
1.3 Atualizar nome de usuário (PUT)
1.4 Remover usuário (DELETE)
2. Projetos (/api/projects)
2.1 Criar projeto (POST)
2.2 Listar todos os projetos (GET)
2.3 Atualizar nome e descrição do projeto (PUT)
2.4 Remover projeto (DELETE)
3. Tarefas (/api/tasks)
3.1 Criar tarefa associada a um projeto e um usuário (POST)
3.2 Listar todas as tarefas (GET)
3.3 Atualizar status ou título da tarefa (PUT)
3.4 Remover tarefa (DELETE)

# Estrutura do projeto

project/
│-- src/
│   ├── controllers/
│   │   ├── userController.js
│   │   ├── projectController.js
│   │   ├── taskController.js
│   ├── models/
│   │   ├── user.js
│   │   ├── project.js
│   │   ├── task.js
│   ├── server.js
│-- package.json
