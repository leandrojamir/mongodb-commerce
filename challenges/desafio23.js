// 23 - Insira os valores combo e tasty no array tags de todos os sanduíches e aproveite para deixar os valores em ordem alfabética ascendente (A a Z)
// Para isso, escreva no arquivo desafio23.js duas queries, nesta ordem:
// Crie uma query que faça tanto a inserção dos valores combo e tasty no array tags de todos os sanduíches. 
// Ordene os valores de tags em ordem alfabética ascendente.

db.produtos
  .updateMany(
    { },
    { $push: { tags: { $each: ["combo", "tasty"], $sort: 1 } } },
  );

//   "tags": [
//     "bovino",
//     "combo",
//     "pão",
//     "tasty"
//   ],

// Crie uma query que retorne o nome e tags de todos os documentos.

db.produtos
  .find({ }, { _id: 0, nome: true, tags: true });

// root@cac03e7a617f:/app# ./scripts/evaluate.sh desafio23
// { "ok" : 1 }
// produtos.bson
// 2023-02-18T14:13:54.285+0000    checking for collection data in /app/assets/produtos/produtos.bson
// 2023-02-18T14:13:54.285+0000    reading metadata for commerce.produtos from /app/assets/produtos/produtos.metadata.json
// 2023-02-18T14:13:54.562+0000    restoring commerce.produtos from /app/assets/produtos/produtos.bson
// 2023-02-18T14:13:54.584+0000    finished restoring commerce.produtos (5 documents, 0 failures)
// 2023-02-18T14:13:54.585+0000    no indexes to restore for collection commerce.produtos
// 2023-02-18T14:13:54.585+0000    5 document(s) restored successfully. 0 document(s) failed to restore.

// ======================= RESULTS =======================
// desafio23: passed 
// ======================= RESULTS =======================
// { "ok" : 1 }
// produtos.bson
// 2023-02-18T14:13:55.021+0000    checking for collection data in /app/assets/produtos/produtos.bson
// 2023-02-18T14:13:55.022+0000    reading metadata for commerce.produtos from /app/assets/produtos/produtos.metadata.json
// 2023-02-18T14:13:55.377+0000    restoring commerce.produtos from /app/assets/produtos/produtos.bson
// 2023-02-18T14:13:55.434+0000    finished restoring commerce.produtos (5 documents, 0 failures)
// 2023-02-18T14:13:55.434+0000    no indexes to restore for collection commerce.produtos
// 2023-02-18T14:13:55.434+0000    5 document(s) restored successfully. 0 document(s) failed to restore.