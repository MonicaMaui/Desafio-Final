🌊 API de Pessoas Desaparecidas - Enchentes RS

API REST desenvolvida para cadastro, consulta e gerenciamento de pessoas desaparecidas durante enchentes no Rio Grande do Sul.

✨ Funcionalidades

Permite:
- Cadastrar desaparecidos
- Listar todos os registros
- Buscar por ID
- Buscar por nome
- Atualizar status (Desaparecido / Encontrado)
- Excluir cadastros

---

🚀 Tecnologias Utilizadas
- Node.js
- Express
- SQLite
- SQLite3
- JavaScript
- Postman
- VS Code
---

## ⚙️ Instalação

```bash
npm install
```
---
## ▶️ Como Executar
```bash
npm run dev
```
---
🔗 Acesse:

http://localhost:3000

[Clique Aqui](http://localhost:3000)

---
---
##  🗄️ Banco de Dados
O banco de dados é criado automaticamente ao iniciar o projeto.

```bash
database.db
```

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

🔗 Endpoints


### 🏠 Rota Inicial
### Rota para listar todos os desaparecidos

Retorna uma página HTML simples com informações da API.
http
GET /desaparecidos
---

📌 Listar todos os desaparecidos

```bash
GET /desaparecidos
```
Retorna todos os registros do banco de dados.

---

### 🔍 Buscar desaparecido por ID

```bash
GET /desaparecidos/:id
```

Ex: /desaparecidos/:1

Retorna um  caso espefífico
---
### Rota para criar um novo desaparecido


### Cadastrar novo desaparecido
```http
POST /desaparecidos
```
### URL
http://localhost:3000/desaparecidos
---
### Body (JSON)
```JSON
{
  "nome": "Juliana Martins",
  "idade": 31,
  "roupa": "Blusa branca e calça jeans",
  "descricao": "Cabelos castanhos, usa mochila preta",
  "localizacao": "Porto Alegre - RS",
  "telefone": "(51) 99988-7766",
  "data_desaparecimento": "15/04/2026"
}
```
---
## PUT /desaparecidos/id:
✏️ Atualizar status
```http
PUT /desaparecidos/:id
```


    ## Body (JSON)

``` JSON
{
  "status": "Encontrado"
}

```

## DELETE /desaparecidos/:id
```http
DELETE /desaparecidos/:id
```


# Exemplo
``` http

http://localhost:3000/desaparecidos/1
```

---

## 🔒 Segurança
A API utiliza '?' nas queries SQL:
```sql
WHERE id = ?
``` 
Isso evita o SQL Injection

---

  ###  📚 Conceitos Aplicados

---
  - CRUD (Create, Read, Update, Delete

  - Rotas com Espress
  - Métodos / Verbos HTTP
  - Banco de dados com SQLite
   - API REST


---

## 👩‍💻Projeto Educacional
Este projeto foi desenvolvido para fins de aprendizado em back-end com Node.js
Criado por Mônica dos Santos

---





