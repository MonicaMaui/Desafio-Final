# 🌊 API de Pessoas Desaparecidas - Enchentes RS

API REST desenvolvida para cadastro, consulta e gerenciamento de pessoas desaparecidas durante enchentes no Rio Grande do Sul.

Permite:

- cadastrar desaparecidos
- listar todos os registros
- buscar por ID
- buscar por nome
- atualizar status (Desaparecido / Encontrado)
- excluir cadastros

---

## 🚀 Tecnologias

- Node.js
- Express
- SQLite
- SQLite3
- JavaScript
- Postman
- VS Code

---

## GET /## ⚙️ Instalação

```bash
npm install
```
---
## ▶️ Como Executar
bash
npm run dev

http://localhost:3000

[Clique Aqui](http://localhost:3000)

---

##  🗄️ Banco de Dados
O banco de dados é criado automaticamente ao iniciar o projeto.

database.db


## 📋 Tabela: desaparecidos

| Campo                  | Descrição                    |
|------------------------|------------------------------|
| id                     | Identificador único          |
| nome                   | Nome da pessoa desaparecida  |
| idade                  | Idade                        |
| roupa                  | Roupa utilizada no momento   |
| descricao              | Descrição adicional          |
| localizacao            | Última localização conhecida |
| telefone               | Telefone para contato        |
| data_desaparecimento   | Data do desaparecimento      |
| status                 | Status do caso               |

---

## 🔗 Endpoints

Retorna uma página HTML simples com informações da API.



---
### 🏠 Rota Inicial
### Rota para listar todos os desaparecidos

http
GET /desaparecidos

Retorna todos os registros do banco de dados
---

### Rota para buscar um  dado espefífico (ID)

http
GET /desaparecidos/:id


Ex: /desaparecidos/:1

Retorna um  caso espefífico
---
### Rota para criar um novo desaparecido



Cadastrar novo desaparecido
```http
POST /desaparecidos
```
### Body (JSON)
```http



http://localhost:3000/desaparecidos
---
Body JSON

{
  "nome": "Juliana Martins",
  "idade": 31,
  "roupa": "Blusa branca e calça jeans",
  "descricao": "Cabelos castanhos, usa mochila preta",
  "localizacao": "Porto Alegre - RS",
  "telefone": "(51) 99988-7766",
  "data_desaparecimento": "15/04/2026"
}
---
## PUT /desaparecidos/id:
Atualizar status
http://localhost:3000/desaparecidos/1
---
Body JSON
{
  "status": "Encontrado"
}

---

## DELETE /desaparecidos/:id

Excluir cadastro
DELETE /desaparecidos/:id

Excluir cadastro
http://localhost:3000/desaparecidos/2
---

## 🔒 Segurança
A API utiliza '?' nas queries SQL:

 
 sql
WHERE id = ?


Isso evita o SQL Injection

---

## 📚 Conceitos
- CRUD (Create,Read,Uldate, Delete)
- Rotas com Express
- Métodos/Verbos HTTP

---

## 👩‍💻Projeto Educacional
Este projeto foi desenvolvido para fins de aprendizado em back-end com Node.js
Criado por Mônica dos Santos
https://github.com/MonicaMaui
---





