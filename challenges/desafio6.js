// 6 - Retorne o nome e as curtidas dos lanches que tiveram curtidas maiores que 10 e menores que 100
// Para isso, escreva a query no arquivo desafio6.js

db.produtos
  .find({ curtidas: { $gt: 10, $lt: 100 } }, { _id: 0, nome: true, curtidas: true });

// root@cac03e7a617f:/app# ./scripts/evaluate.sh desafio6
// { "ok" : 1 }
// produtos.bson
// 2023-02-07T19:11:51.764+0000 checking for collection data in /app/assets/produtos/produtos.bson
// 2023-02-07T19:11:51.764+0000 reading metadata for commerce.produtos from /app/assets/produtos/produtos.metadata.json
// 2023-02-07T19:11:52.038+0000 restoring commerce.produtos from /app/assets/produtos/produtos.bson
// 2023-02-07T19:11:52.091+0000 finished restoring commerce.produtos (5 documents, 0 failures)
// 2023-02-07T19:11:52.092+0000 no indexes to restore for collection commerce.produtos
// 2023-02-07T19:11:52.092+0000 5 document(s) restored successfully. 0 document(s) failed to restore.

// ======================= RESULTS =======================
// desafio6: passed 
// ======================= RESULTS =======================
// { "ok" : 1 }
// produtos.bson
// 2023-02-07T19:11:52.461+0000 checking for collection data in /app/assets/produtos/produtos.bson
// 2023-02-07T19:11:52.461+0000 reading metadata for commerce.produtos from /app/assets/produtos/produtos.metadata.json
// 2023-02-07T19:11:52.750+0000 restoring commerce.produtos from /app/assets/produtos/produtos.bson
// 2023-02-07T19:11:52.807+0000 finished restoring commerce.produtos (5 documents, 0 failures)
// 2023-02-07T19:11:52.807+0000 no indexes to restore for collection commerce.produtos
// 2023-02-07T19:11:52.807+0000 5 document(s) restored successfully. 0 document(s) failed to restore.
