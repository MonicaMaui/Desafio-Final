const express = require("express");
const { criarBanco } = require("./database");

const app = express();
const PORT = 3000;

app.use(express.json());



app.get("/", (req, res) => {
  res.send("API de Pessoas Desaparecidas - Enchentes RS funcionando!");
});

app.get("/desaparecidos", async (req, res) => {
  const db = await criarBanco();

  const pessoas = await db.all(`
    SELECT * FROM desaparecidos
  `);

  res.json(pessoas);
});


app.get("/desaparecidos/:id", async (req, res) => {
  const db = await criarBanco();
  const id = req.params.id;

  const pessoa = await db.get(`
    SELECT * FROM desaparecidos
    WHERE id = ?
  `, [id]);

  if (!pessoa) {
    return res.status(404).json({
      mensagem: "Pessoa não encontrada"
    });
  }

  res.json(pessoa);
});


app.get("/buscar/:nome", async (req, res) => {
  const db = await criarBanco();
  const nome = req.params.nome;

  const resultado = await db.all(`
    SELECT * FROM desaparecidos
    WHERE nome LIKE ?
  `, [`%${nome}%`]);

  res.json(resultado);
});



app.post("/desaparecidos", async (req, res) => {
  const db = await criarBanco();

  const {
    nome,
    idade,
    roupa,
    descricao,
    localizacao,
    telefone,
    data_desaparecimento
  } = req.body;

  await db.run(`
    INSERT INTO desaparecidos
    (
      nome,
      idade,
      roupa,
      descricao,
      localizacao,
      telefone,
      data_desaparecimento
    )
    VALUES (?, ?, ?, ?, ?, ?, ?)
  `, [
    nome,
    idade,
    roupa,
    descricao,
    localizacao,
    telefone,
    data_desaparecimento
  ]);

  res.status(201).json({
    mensagem: "Pessoa desaparecida cadastrada com sucesso!"
  });
});



app.put("/desaparecidos/:id", async (req, res) => {
  const db = await criarBanco();
  const id = req.params.id;
  const { status } = req.body;

  await db.run(`
    UPDATE desaparecidos
    SET status = ?
    WHERE id = ?
  `, [status, id]);

  res.json({
    mensagem: "Status atualizado com sucesso!"
  });
});


app.delete("/desaparecidos/:id", async (req, res) => {
  const db = await criarBanco();
  const id = req.params.id;

  await db.run(`
    DELETE FROM desaparecidos
    WHERE id = ?
  `, [id]);

  res.json({
    mensagem: "Cadastro removido com sucesso!"
  });
});



app.listen(PORT, () => {
  console.log(`Servidor rodando em http://localhost:${PORT}`);
});