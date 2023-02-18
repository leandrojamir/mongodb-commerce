// 18 - Inclua bacon no final da lista de ingredientes dos sanduíches Big Mac e Quarteirão com Queijo
// Para isso, escreva no arquivo desafio18.js duas queries, nesta ordem:
// Crie uma query que faça a inclusão de bacon no final da lista de ingredientes dos sanduíches Big Mac e Quarteirão com Queijo.
db.produtos
  .updateMany(
    { nome: { $in: ["Big Mac", "Quarteirão com Queijo"] } },
    { $push: { ingredientes: "bacon" } }, 
  );

// },
// "nome": "Big Mac",
// "ingredientes": [
//   "hamburguer",
//   "alface",
//   "queijo",
//   "molho especial",
//   "cebola",
//   "picles",
//   "pão com gergelim",
//   "bacon",
//   "dois bacon",
//   "tres bacon"
// ],

// Crie uma query que retorne o nome e ingredientes de todos os documentos.

db.produtos
  .find({ }, { _id: 0, nome: true, ingredientes: true });

// root@cac03e7a617f:/app# ./scripts/evaluate.sh desafio18
// { "ok" : 1 }
// produtos.bson
// 2023-02-18T01:08:39.593+0000    checking for collection data in /app/assets/produtos/produtos.bson
// 2023-02-18T01:08:39.594+0000    reading metadata for commerce.produtos from /app/assets/produtos/produtos.metadata.json
// 2023-02-18T01:08:39.865+0000    restoring commerce.produtos from /app/assets/produtos/produtos.bson
// 2023-02-18T01:08:39.913+0000    finished restoring commerce.produtos (5 documents, 0 failures)
// 2023-02-18T01:08:39.914+0000    no indexes to restore for collection commerce.produtos
// 2023-02-18T01:08:39.914+0000    5 document(s) restored successfully. 0 document(s) failed to restore.

// ======================= RESULTS =======================
// desafio18: passed 
// ======================= RESULTS =======================
// { "ok" : 1 }
// produtos.bson
// 2023-02-18T01:08:40.439+0000    checking for collection data in /app/assets/produtos/produtos.bson
// 2023-02-18T01:08:40.441+0000    reading metadata for commerce.produtos from /app/assets/produtos/produtos.metadata.json
// 2023-02-18T01:08:40.741+0000    restoring commerce.produtos from /app/assets/produtos/produtos.bson
// 2023-02-18T01:08:40.796+0000    finished restoring commerce.produtos (5 documents, 0 failures)
// 2023-02-18T01:08:40.796+0000    no indexes to restore for collection commerce.produtos
// 2023-02-18T01:08:40.796+0000    5 document(s) restored successfully. 0 document(s) failed to restore.