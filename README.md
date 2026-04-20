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

## ⚙️ Instalação

### Clonar repositório

```bash
git clone https://github.com/MonicaMaui/Desaparecidos-Enchentes-RS.git
Entrar na pasta
cd Desafio-Final
---
Instalar dependências
npm install
---
Rodar servidor
node server.js
---
✅ Servidor
http://localhost:3000
---
Mensagem esperada:

Servidor rodando em http://localhost:3000
---
🔗 Rotas
GET /

Verificar API

http://localhost:3000/
GET /desaparecidos
---
Listar todos

http://localhost:3000/desaparecidos
---
POST /desaparecidos

Cadastrar novo desaparecido

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
PUT /desaparecidos/id:
Atualizar status
http://localhost:3000/desaparecidos/1
---
Body JSON
{
  "status": "Encontrado"
}
---
DELETE /desaparecidos/:id

Excluir cadastro
DELETE /desaparecidos/:id

Excluir cadastro
http://localhost:3000/desaparecidos/2
---
🗃️ Banco de Dados

Tabela:
desaparecidos
---
Campos:

id
nome
idade
roupa
descricao
localizacao
telefone
data_desaparecimento
status
---🧪 Testes

Rotas testadas com:

Postman
Navegador
SQLite
---
👩‍💻 Desenvolvedora

Monica Maui

GitHub:
https://github.com/MonicaMaui
---

---



