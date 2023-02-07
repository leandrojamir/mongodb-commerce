// 8 - Delete os lanches com menos de 50 curtidas e retorne o nome dos lanches que restaram no banco
// Para isso, escreva a query no arquivo desafio8.js

db.produtos
  .deleteMany({ curtidas: { $lt: 50 } });

db.produtos
  .find({ }, { _id: 0, nome: 1 });

// root@cac03e7a617f:/app# ./scripts/evaluate.sh desafio8
// { "ok" : 1 }
// produtos.bson
// 2023-02-07T19:35:17.364+0000 checking for collection data in /app/assets/produtos/produtos.bson
// 2023-02-07T19:35:17.364+0000 reading metadata for commerce.produtos from /app/assets/produtos/produtos.metadata.json
// 2023-02-07T19:35:17.618+0000 restoring commerce.produtos from /app/assets/produtos/produtos.bson
// 2023-02-07T19:35:17.659+0000 finished restoring commerce.produtos (5 documents, 0 failures)
// 2023-02-07T19:35:17.659+0000 no indexes to restore for collection commerce.produtos
// 2023-02-07T19:35:17.659+0000 5 document(s) restored successfully. 0 document(s) failed to restore.

// ======================= RESULTS =======================
// desafio8: passed 
// ======================= RESULTS =======================
// { "ok" : 1 }
// produtos.bson
// 2023-02-07T19:35:18.053+0000 checking for collection data in /app/assets/produtos/produtos.bson
// 2023-02-07T19:35:18.053+0000 reading metadata for commerce.produtos from /app/assets/produtos/produtos.metadata.json
// 2023-02-07T19:35:18.309+0000 restoring commerce.produtos from /app/assets/produtos/produtos.bson
// 2023-02-07T19:35:18.350+0000 finished restoring commerce.produtos (5 documents, 0 failures)
// 2023-02-07T19:35:18.350+0000 no indexes to restore for collection commerce.produtos
// 2023-02-07T19:35:18.350+0000 5 document(s) restored successfully. 0 document(s) failed to restore.
