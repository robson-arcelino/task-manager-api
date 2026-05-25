# Task Manager API

API REST para gerenciamento de tarefas desenvolvida com Node.js, Express e MongoDB.

---

# Sobre o projeto

O Task Manager API é uma aplicação backend criada para gerenciamento de tarefas com autenticação de usuários utilizando JWT.

O projeto foi desenvolvido com foco em boas práticas de desenvolvimento backend, organização de arquitetura e criação de APIs RESTful.

---

# Tecnologias utilizadas

## Backend

- Node.js
- Express.js
- MongoDB
- Mongoose
- JWT (JSON Web Token)
- dotenv

---

# Funcionalidades

## Usuários

- Cadastro de usuários
- Login de usuários
- Autenticação com JWT
- Proteção de rotas

## Tarefas

- Criar tarefas
- Listar tarefas
- Atualizar tarefas
- Deletar tarefas

---

# Estrutura do projeto

```bash
src/
├── controllers
│   ├── authController.js
│   └── taskController.js
│
├── database
│
├── middlewares
│   ├── authMiddleware.js
│   └── taskMiddleware.js
│
├── models
│   ├── Task.js
│   └── User.js
│
├── routes
│   ├── authRoutes.js
│   └── taskRoutes.js
│
├── services
│
├── utils
│
├── app.js
└── server.js
```

---

# Instalação do projeto

## Clonar repositório

```bash
git clone <PRIVATE_URL>
```

---

## Entrar na pasta

```bash
cd task-manager-api
```

---

## Instalar dependências

```bash
npm install
```

---

# Variáveis de ambiente

Crie um arquivo `.env` na raiz do projeto:

```env
PORT=3000
MONGO_URI=sua_url_mongodb
JWT_SECRET=sua_chave_secreta
```

---

# Executando o projeto

## Ambiente de desenvolvimento

```bash
npm run dev
```

---

## Ambiente normal

```bash
node src/server.js
```

---

# Rotas da API

# Autenticação

## Registrar usuário

### POST

```http
/api/auth/register
```

### Body

```json
{
  "name": "Robson",
  "email": "robson@email.com",
  "password": "123456"
}
```

---

## Login

### POST

```http
/api/auth/login
```

### Body

```json
{
  "email": "robson@email.com",
  "password": "123456"
}
```

---

# Tarefas

## Criar tarefa

### POST

```http
/api/tasks
```

### Headers

```http
Authorization: Bearer TOKEN
```

### Body

```json
{
  "title": "Estudar Node.js",
  "description": "Praticar criação de APIs REST"
}
```

---

## Listar tarefas

### GET

```http
/api/tasks
```

---

## Atualizar tarefa

### PUT

```http
/api/tasks/:id
```

---

## Deletar tarefa

### DELETE

```http
/api/tasks/:id
```

---

# Segurança

O projeto utiliza:

- JWT para autenticação
- Middleware para proteção de rotas
- Variáveis de ambiente com dotenv

---

# Objetivos do projeto

Este projeto foi desenvolvido para:

- Praticar desenvolvimento backend
- Aprender arquitetura de APIs REST
- Utilizar autenticação JWT
- Trabalhar com MongoDB
- Organizar aplicações Node.js em camadas

---

# Melhorias futuras

- Validação de dados
- Testes automatizados
- Deploy em produção
- Documentação Swagger
- Refresh Token
- Upload de arquivos

---

# Autor

## Robson Acelino

Desenvolvedor Backend em formação.

- Node.js
- Express
- MongoDB
- APIs REST
- JWT

---

# Licença

Este projeto está sob a licença MIT.
