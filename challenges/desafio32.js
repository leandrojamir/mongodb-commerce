// 32 - Retorne o nome e a quantidade de vendas (vendidos) dos sanduíches em que o número de vendas é múltiplo de 5
// Para isso, escreva a query no arquivo desafio32.js

// https://www.mongodb.com/docs/v5.0/reference/operator/query/mod/
// { field: { $mod: [ divisor, remainder ] } }
db.produtos
  .find({ vendidos: { $mod: [5, 0] } }, { _id: 0, nome: true, vendidos: true });

//   [
//     {
//       "nome": "McChicken",
//       "vendidos": 85
//     }
//   ]

// root@cac03e7a617f:/app# ./scripts/evaluate.sh desafio32
// { "ok" : 1 }
// produtos.bson
// 2023-02-18T20:01:42.137+0000    checking for collection data in /app/assets/produtos/produtos.bson
// 2023-02-18T20:01:42.138+0000    reading metadata for commerce.produtos from /app/assets/produtos/produtos.metadata.json
// 2023-02-18T20:01:42.404+0000    restoring commerce.produtos from /app/assets/produtos/produtos.bson
// 2023-02-18T20:01:42.452+0000    finished restoring commerce.produtos (5 documents, 0 failures)
// 2023-02-18T20:01:42.453+0000    no indexes to restore for collection commerce.produtos
// 2023-02-18T20:01:42.453+0000    5 document(s) restored successfully. 0 document(s) failed to restore.

// ======================= RESULTS =======================
// desafio32: passed 
// ======================= RESULTS =======================
// { "ok" : 1 }
// produtos.bson
// 2023-02-18T20:01:42.837+0000    checking for collection data in /app/assets/produtos/produtos.bson
// 2023-02-18T20:01:42.837+0000    reading metadata for commerce.produtos from /app/assets/produtos/produtos.metadata.json
// 2023-02-18T20:01:43.070+0000    restoring commerce.produtos from /app/assets/produtos/produtos.bson
// 2023-02-18T20:01:43.110+0000    finished restoring commerce.produtos (5 documents, 0 failures)
// 2023-02-18T20:01:43.110+0000    no indexes to restore for collection commerce.produtos
// 2023-02-18T20:01:43.110+0000    5 document(s) restored successfully. 0 document(s) failed to restore.