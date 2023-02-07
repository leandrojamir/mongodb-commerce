// 7 - Retorne o nome e vendidos dos lanches que tenham sido vendidos com uma quantidade diferente de 50 e em que o campo tags não exista
// Para isso, escreva a query no arquivo desafio7.js

db.produtos
  .find({ vendidos: { $ne: 50 }, tags: { $exists: false } },
  { _id: 0, nome: true, vendidos: true });

// root@cac03e7a617f:/app# ./scripts/evaluate.sh desafio7
// { "ok" : 1 }
// produtos.bson
// 2023-02-07T19:26:18.846+0000 checking for collection data in /app/assets/produtos/produtos.bson
// 2023-02-07T19:26:18.846+0000 reading metadata for commerce.produtos from /app/assets/produtos/produtos.metadata.json
// 2023-02-07T19:26:19.058+0000 restoring commerce.produtos from /app/assets/produtos/produtos.bson
// 2023-02-07T19:26:19.086+0000 finished restoring commerce.produtos (5 documents, 0 failures)
// 2023-02-07T19:26:19.086+0000 no indexes to restore for collection commerce.produtos
// 2023-02-07T19:26:19.086+0000 5 document(s) restored successfully. 0 document(s) failed to restore.

// ======================= RESULTS =======================
// desafio7: passed 
// ======================= RESULTS =======================
// { "ok" : 1 }
// produtos.bson
// 2023-02-07T19:26:19.509+0000 checking for collection data in /app/assets/produtos/produtos.bson
// 2023-02-07T19:26:19.509+0000 reading metadata for commerce.produtos from /app/assets/produtos/produtos.metadata.json
// 2023-02-07T19:26:19.710+0000 restoring commerce.produtos from /app/assets/produtos/produtos.bson
// 2023-02-07T19:26:19.764+0000 finished restoring commerce.produtos (5 documents, 0 failures)
// 2023-02-07T19:26:19.764+0000 no indexes to restore for collection commerce.produtos
// 2023-02-07T19:26:19.764+0000 5 document(s) restored successfully. 0 document(s) failed to restore.
