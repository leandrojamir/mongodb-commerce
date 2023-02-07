// 9 - Retorne o nome de todos os lanches que possuam calorias abaixo de 500
// Para isso, escreva a query no arquivo desafio9.js.

db.produtos
  .find({ valoresNutricionais: { $elemMatch: { quantidade: { $lt: 500 }, tipo: "calorias" } } },
  { _id: 0, nome: true });

// root@cac03e7a617f:/app# ./scripts/evaluate.sh desafio9
// { "ok" : 1 }
// produtos.bson
// 2023-02-07T21:36:13.281+0000 checking for collection data in /app/assets/produtos/produtos.bson
// 2023-02-07T21:36:13.281+0000 reading metadata for commerce.produtos from /app/assets/produtos/produtos.metadata.json
// 2023-02-07T21:36:13.544+0000 restoring commerce.produtos from /app/assets/produtos/produtos.bson
// 2023-02-07T21:36:13.572+0000 finished restoring commerce.produtos (5 documents, 0 failures)
// 2023-02-07T21:36:13.572+0000 no indexes to restore for collection commerce.produtos
// 2023-02-07T21:36:13.572+0000 5 document(s) restored successfully. 0 document(s) failed to restore.

// ======================= RESULTS =======================
// desafio9: passed 
// ======================= RESULTS =======================
// { "ok" : 1 }
// produtos.bson
// 2023-02-07T21:36:14.007+0000 checking for collection data in /app/assets/produtos/produtos.bson
// 2023-02-07T21:36:14.007+0000 reading metadata for commerce.produtos from /app/assets/produtos/produtos.metadata.json
// 2023-02-07T21:36:14.229+0000 restoring commerce.produtos from /app/assets/produtos/produtos.bson
// 2023-02-07T21:36:14.267+0000 finished restoring commerce.produtos (5 documents, 0 failures)
// 2023-02-07T21:36:14.267+0000 no indexes to restore for collection commerce.produtos
// 2023-02-07T21:36:14.267+0000 5 document(s) restored successfully. 0 document(s) failed to restore.
