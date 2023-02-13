// 11 - Retorne o nome do produto, a quantidade de curtidas e quantos itens foram vendidos dos produtos que não sejam iguais a Big Mac e McChicken
// Para isso, escreva a query no arquivo desafio11.js

db.produtos
  .find({ $and: [{ nome: { $ne: "Big Mac" } }, { nome: { $ne: "McChicken" } }] },
  { _id: 0, nome: true, curtidas: true, vendidos: true });

// root@cac03e7a617f:/app# ./scripts/evaluate.sh desafio11
// { "ok" : 1 }
// produtos.bson
// 2023-02-13T21:26:28.222+0000 checking for collection data in /app/assets/produtos/produtos.bson
// 2023-02-13T21:26:28.222+0000 reading metadata for commerce.produtos from /app/assets/produtos/produtos.metadata.json
// 2023-02-13T21:26:28.497+0000 restoring commerce.produtos from /app/assets/produtos/produtos.bson
// 2023-02-13T21:26:28.521+0000 finished restoring commerce.produtos (5 documents, 0 failures)
// 2023-02-13T21:26:28.522+0000 no indexes to restore for collection commerce.produtos
// 2023-02-13T21:26:28.522+0000 5 document(s) restored successfully. 0 document(s) failed to restore.

// ======================= RESULTS =======================
// desafio11: passed 
// ======================= RESULTS =======================
// { "ok" : 1 }
// produtos.bson
// 2023-02-13T21:26:28.960+0000 checking for collection data in /app/assets/produtos/produtos.bson
// 2023-02-13T21:26:28.960+0000 reading metadata for commerce.produtos from /app/assets/produtos/produtos.metadata.json
// 2023-02-13T21:26:29.220+0000 restoring commerce.produtos from /app/assets/produtos/produtos.bson
// 2023-02-13T21:26:29.244+0000 finished restoring commerce.produtos (5 documents, 0 failures)
// 2023-02-13T21:26:29.244+0000 no indexes to restore for collection commerce.produtos
// 2023-02-13T21:26:29.244+0000 5 document(s) restored successfully. 0 document(s) failed to restore.
