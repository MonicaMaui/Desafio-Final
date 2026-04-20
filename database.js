const sqlite3 = require("sqlite3");
const { open } = require("sqlite");

const criarBanco = async () => {
  const db = await open({
    filename: "./database.db",
    driver: sqlite3.Database,
  });

  await db.exec(`
    CREATE TABLE IF NOT EXISTS desaparecidos (
      id INTEGER PRIMARY KEY AUTOINCREMENT,
      nome TEXT,
      idade INTEGER,
      roupa TEXT,
      descricao TEXT,
      localizacao TEXT,
      telefone TEXT,
      data_desaparecimento TEXT,
      status TEXT DEFAULT 'Desaparecido'
    )
  `);

  

  const checagem = await db.get(`
    SELECT COUNT(*) AS total FROM desaparecidos
  `);

  if (checagem.total === 0) {
    await db.exec(`
      INSERT INTO desaparecidos
      (nome, idade, roupa, descricao, localizacao, telefone, data_desaparecimento)
      VALUES

      (
        'Maria da Silva',
        42,
        'Blusa vermelha e calça jeans',
        'Cabelos pretos, altura média, usa óculos',
        'Rua dos Andradas, Centro, Porto Alegre - RS',
        '(51) 99911-2233',
        '10/04/2026'
      ),

      (
        'João Pereira',
        58,
        'Camiseta azul e bermuda preta',
        'Careca, barba grisalha, alto',
        'Avenida Brasil, Canoas - RS',
        '(51) 99822-3344',
        '11/04/2026'
      ),

      (
        'Ana Souza',
        29,
        'Vestido floral amarelo',
        'Baixa estatura, cabelos cacheados',
        'Rua Marechal Floriano, Pelotas - RS',
        '(53) 99733-4455',
        '09/04/2026'
      ),

      (
        'Carlos Mendes',
        35,
        'Jaqueta preta e calça cinza',
        'Moreno, tatuagem no braço esquerdo',
        'Rua Sinimbu, Caxias do Sul - RS',
        '(54) 99644-5566',
        '08/04/2026'
      ),

      (
        'Fernanda Lima',
        47,
        'Casaco bege e calça preta',
        'Loira, usa bolsa marrom',
        'Rua Sete de Setembro, Santa Maria - RS',
        '(55) 99555-6677',
        '07/04/2026'
      ),

      (
        'Pedro Rocha',
        18,
        'Moletom cinza e tênis branco',
        'Magro, cabelo curto, jovem',
        'Rua Bento Gonçalves, Passo Fundo - RS',
        '(54) 99466-7788',
        '12/04/2026'
      );
    `);
  }

  console.log(`Banco pronto com ${checagem.total} registros de desaparecidos.`);



  const todos = await db.all(`
    SELECT * FROM desaparecidos
  `);

  console.table(todos);

 
  const pessoaMaria = await db.all(`
    SELECT * FROM desaparecidos
    WHERE nome = 'Maria da Silva'
  `);

  console.table(pessoaMaria);

  

  await db.run(`
    UPDATE desaparecidos
    SET status = 'Encontrado'
    WHERE nome = 'Carlos Mendes'
  `);

  console.log("Status de Carlos Mendes atualizado para Encontrado");



  await db.run(`
    DELETE FROM desaparecidos
    WHERE id = 2
  `);

  console.log("Registro ID 2 removido");


  const resultadoFinal = await db.all(`
    SELECT * FROM desaparecidos
  `);

  console.table(resultadoFinal);

  console.log("Banco de dados de desaparecidos configurado com sucesso!");

  return db;
};

module.exports = { criarBanco };


