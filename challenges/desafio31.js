// 31 - Retorne o nome dos sanduíches em que o número de curtidas é maior que o número de sanduíches vendidos
// Para isso, escreva a query no arquivo desafio31.js

// https://www.mongodb.com/docs/v5.0/reference/operator/query/expr/
db.produtos
  .find(
    { $expr: { $gt: ["$curtidas", "$vendidos"] } },
    { _id: 0, nome: true },
  );

// root@cac03e7a617f:/app# ./scripts/evaluate.sh desafio31
// { "ok" : 1 }
// produtos.bson
// 2023-02-18T19:44:52.304+0000    checking for collection data in /app/assets/produtos/produtos.bson
// 2023-02-18T19:44:52.304+0000    reading metadata for commerce.produtos from /app/assets/produtos/produtos.metadata.json
// 2023-02-18T19:44:52.583+0000    restoring commerce.produtos from /app/assets/produtos/produtos.bson
// 2023-02-18T19:44:52.604+0000    finished restoring commerce.produtos (5 documents, 0 failures)
// 2023-02-18T19:44:52.605+0000    no indexes to restore for collection commerce.produtos
// 2023-02-18T19:44:52.605+0000    5 document(s) restored successfully. 0 document(s) failed to restore.

// ======================= RESULTS =======================
// desafio31: passed 
// ======================= RESULTS =======================
// { "ok" : 1 }
// produtos.bson
// 2023-02-18T19:44:53.072+0000    checking for collection data in /app/assets/produtos/produtos.bson
// 2023-02-18T19:44:53.072+0000    reading metadata for commerce.produtos from /app/assets/produtos/produtos.metadata.json
// 2023-02-18T19:44:53.420+0000    restoring commerce.produtos from /app/assets/produtos/produtos.bson
// 2023-02-18T19:44:53.505+0000    finished restoring commerce.produtos (5 documents, 0 failures)
// 2023-02-18T19:44:53.505+0000    no indexes to restore for collection commerce.produtos
// 2023-02-18T19:44:53.505+0000    5 document(s) restored successfully. 0 document(s) failed to restore.