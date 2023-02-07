// 5 - Retorne o nome, as curtidas e vendidos dos lanches que tiveram quantidade de curtidas igual a 36
// ou 
// tenham a quantidade de vendas igual a 85
// Para isso, escreva a query no arquivo desafio5.js

db.produtos
  .find({ $or: [{ curtidas: 36 }, { vendidos: 85 }] },
  { _id: 0, nome: true, curtidas: true, vendidos: true });

// root@cac03e7a617f:/app# ./scripts/evaluate.sh desafio5
// { "ok" : 1 }
// produtos.bson
// 2023-02-07T19:03:38.923+0000 checking for collection data in /app/assets/produtos/produtos.bson
// 2023-02-07T19:03:38.924+0000 reading metadata for commerce.produtos from /app/assets/produtos/produtos.metadata.json
// 2023-02-07T19:03:39.174+0000 restoring commerce.produtos from /app/assets/produtos/produtos.bson
// 2023-02-07T19:03:39.196+0000 finished restoring commerce.produtos (5 documents, 0 failures)
// 2023-02-07T19:03:39.196+0000 no indexes to restore for collection commerce.produtos
// 2023-02-07T19:03:39.196+0000 5 document(s) restored successfully. 0 document(s) failed to restore.

// ======================= RESULTS =======================
// desafio5: passed 
// ======================= RESULTS =======================
// { "ok" : 1 }
// produtos.bson
// 2023-02-07T19:03:39.579+0000 checking for collection data in /app/assets/produtos/produtos.bson
// 2023-02-07T19:03:39.580+0000 reading metadata for commerce.produtos from /app/assets/produtos/produtos.metadata.json
// 2023-02-07T19:03:40.087+0000 restoring commerce.produtos from /app/assets/produtos/produtos.bson
// 2023-02-07T19:03:40.133+0000 finished restoring commerce.produtos (5 documents, 0 failures)
// 2023-02-07T19:03:40.133+0000 no indexes to restore for collection commerce.produtos
// 2023-02-07T19:03:40.134+0000 5 document(s) restored successfully. 0 document(s) failed to restore.
