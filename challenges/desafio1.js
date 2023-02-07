// 1 - Retorne a quantidade de documentos inseridos na coleção produtos
// Para isso, escreva a query no arquivo desafio1.js

db.produtos.countDocuments({});

// root@cac03e7a617f:/app# ./scripts/evaluate.sh desafio1
// { "ok" : 1 }
// produtos.bson
// 2023-02-07T17:55:10.457+0000 checking for collection data in /app/assets/produtos/produtos.bson
// 2023-02-07T17:55:10.458+0000 reading metadata for commerce.produtos from /app/assets/produtos/produtos.metadata.json
// 2023-02-07T17:55:10.823+0000 restoring commerce.produtos from /app/assets/produtos/produtos.bson
// 2023-02-07T17:55:10.899+0000 finished restoring commerce.produtos (5 documents, 0 failures)
// 2023-02-07T17:55:10.899+0000 no indexes to restore for collection commerce.produtos
// 2023-02-07T17:55:10.900+0000 5 document(s) restored successfully. 0 document(s) failed to restore.

// ======================= RESULTS =======================
// desafio1: passed 
// ======================= RESULTS =======================
// { "ok" : 1 }
// produtos.bson
// 2023-02-07T17:55:11.400+0000 checking for collection data in /app/assets/produtos/produtos.bson
// 2023-02-07T17:55:11.401+0000 reading metadata for commerce.produtos from /app/assets/produtos/produtos.metadata.json
// 2023-02-07T17:55:11.859+0000 restoring commerce.produtos from /app/assets/produtos/produtos.bson
// 2023-02-07T17:55:11.885+0000 finished restoring commerce.produtos (5 documents, 0 failures)
// 2023-02-07T17:55:11.885+0000 no indexes to restore for collection commerce.produtos
// 2023-02-07T17:55:11.885+0000 5 document(s) restored successfully. 0 document(s) failed to restore.