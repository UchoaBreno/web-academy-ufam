# Trabalho Final - Web Academy Livros

Aplicação desenvolvida para a disciplina de Containers da Web Academy/UFAM.

## Tecnologias

- Docker
- Docker Compose
- Node.js
- TypeScript
- React
- MySQL 8
- phpMyAdmin
- Nginx

---

## Estrutura do projeto

```text
tp-final-webacademy
│
├── backend
├── frontend
├── bd
├── docker-compose.yml
└── README.md
```

---

## Pré-requisitos

Antes de executar o projeto é necessário possuir instalado:

- Docker Desktop
- Docker Compose

---

## Como executar

Clone o repositório:

```bash
git clone <url-do-repositorio>
```

Acesse a pasta do projeto:

```bash
cd tp-final-webacademy
```

Construa as imagens Docker:

```bash
docker compose build
```

Inicie os containers:

```bash
docker compose up -d
```

Após a inicialização, os serviços estarão disponíveis nos endereços abaixo.

---

## Serviços

### Frontend

Aplicação React:

```
http://localhost:8000
```

---

### Backend (API)

Documentação/base da API:

```
http://localhost:4444/api
```

Listagem de livros:

```
http://localhost:4444/api/livros
```

---

### phpMyAdmin

```
http://localhost:8080
```

Credenciais de acesso:

**Servidor**

```text
mysql
```

**Usuário**

```text
root
```

**Senha**

```text
senhasegura
```

**Banco de dados**

```text
livraria
```

---

## Containers utilizados

O projeto é composto pelos seguintes containers:

- frontend
- backend
- mysql
- phpmyadmin

---

## Arquivos `.env`

Os arquivos `.env` do backend e do frontend foram mantidos no repositório para facilitar a execução do projeto durante a correção da atividade.

Caso seja necessário recriá-los, utilize as configurações abaixo.

### Backend (`backend/.env`)

```env
PORTA=4444
DATABASE_URL=mysql://root:senhasegura@mysql:3306/livraria
```

### Frontend (`frontend/.env`)

```env
VITE_API_BASE_URL=http://localhost:4444/api
VITE_ROTA_LIVROS=/livros
```

> **Importante:** caso qualquer variável dos arquivos `.env` seja alterada, é necessário reconstruir as imagens para que as modificações sejam aplicadas.

```bash
docker compose build
docker compose up -d
```

---

## Encerrar os containers

Para interromper e remover os containers em execução:

```bash
docker compose down
```

---

## Reconstruir a aplicação

Sempre que houver alterações no código-fonte ou nos arquivos `.env`, execute:

```bash
docker compose build
docker compose up -d
```

---

## Observações

- O banco de dados MySQL utiliza um volume Docker para garantir a persistência dos dados entre reinicializações dos containers.
- O backend utiliza um volume para armazenamento dos arquivos de log.
- O frontend é servido pelo servidor Nginx.
- O projeto foi desenvolvido para ser executado integralmente utilizando Docker Compose, não sendo necessária a instalação local das dependências do backend ou do frontend.