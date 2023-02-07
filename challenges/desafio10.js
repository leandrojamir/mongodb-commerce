// 10 - Retorne o nome de todos os lanches que tenham o percentual de proteínas maior ou igual a 30 e menor ou igual a 40
// Para isso, escreva a query no arquivo desafio10.js

// .trybe>expected-results>desafio10
// { "nome" : "Big Mac" }
// { "nome" : "Quarteirão com Queijo" }
// { "nome" : "Cheddar McMelt" }

db.produtos
  .find({ valoresNutricionais: { $elemMatch: {
    percentual: { $gte: 30, $lte: 40 },
    tipo: "proteínas",
  } } },
  { _id: 0, nome: true });

// root@cac03e7a617f:/app# ./scripts/evaluate.sh desafio10
// { "ok" : 1 }
// produtos.bson
// 2023-02-07T22:55:19.858+0000 checking for collection data in /app/assets/produtos/produtos.bson
// 2023-02-07T22:55:19.859+0000 reading metadata for commerce.produtos from /app/assets/produtos/produtos.metadata.json
// 2023-02-07T22:55:20.119+0000 restoring commerce.produtos from /app/assets/produtos/produtos.bson
// 2023-02-07T22:55:20.159+0000 finished restoring commerce.produtos (5 documents, 0 failures)
// 2023-02-07T22:55:20.159+0000 no indexes to restore for collection commerce.produtos
// 2023-02-07T22:55:20.159+0000 5 document(s) restored successfully. 0 document(s) failed to restore.

// ======================= RESULTS =======================
// desafio10: passed 
// ======================= RESULTS =======================
// { "ok" : 1 }
// produtos.bson
// 2023-02-07T22:55:20.614+0000 checking for collection data in /app/assets/produtos/produtos.bson
// 2023-02-07T22:55:20.615+0000 reading metadata for commerce.produtos from /app/assets/produtos/produtos.metadata.json
// 2023-02-07T22:55:20.929+0000 restoring commerce.produtos from /app/assets/produtos/produtos.bson
// 2023-02-07T22:55:20.984+0000 finished restoring commerce.produtos (5 documents, 0 failures)
// 2023-02-07T22:55:20.984+0000 no indexes to restore for collection commerce.produtos
// 2023-02-07T22:55:20.984+0000 5 document(s) restored successfully. 0 document(s) failed to restore.
