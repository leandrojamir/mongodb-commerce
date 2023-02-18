// 28 - Conte quantos produtos têm 4 ingredientes
// Para isso, escreva a query no arquivo desafio28.js

// https://www.mongodb.com/docs/manual/reference/operator/query/size/
db.produtos
  .countDocuments({ ingredientes: { $size: 4 } });

// root@cac03e7a617f:/app# ./scripts/evaluate.sh desafio28
// { "ok" : 1 }
// produtos.bson
// 2023-02-18T19:11:24.012+0000    checking for collection data in /app/assets/produtos/produtos.bson
// 2023-02-18T19:11:24.012+0000    reading metadata for commerce.produtos from /app/assets/produtos/produtos.metadata.json
// 2023-02-18T19:11:24.255+0000    restoring commerce.produtos from /app/assets/produtos/produtos.bson
// 2023-02-18T19:11:24.305+0000    finished restoring commerce.produtos (5 documents, 0 failures)
// 2023-02-18T19:11:24.305+0000    no indexes to restore for collection commerce.produtos
// 2023-02-18T19:11:24.305+0000    5 document(s) restored successfully. 0 document(s) failed to restore.

// ======================= RESULTS =======================
// desafio28: passed 
// ======================= RESULTS =======================
// { "ok" : 1 }
// produtos.bson
// 2023-02-18T19:11:24.690+0000    checking for collection data in /app/assets/produtos/produtos.bson
// 2023-02-18T19:11:24.690+0000    reading metadata for commerce.produtos from /app/assets/produtos/produtos.metadata.json
// 2023-02-18T19:11:24.941+0000    restoring commerce.produtos from /app/assets/produtos/produtos.bson
// 2023-02-18T19:11:24.963+0000    finished restoring commerce.produtos (5 documents, 0 failures)
// 2023-02-18T19:11:24.964+0000    no indexes to restore for collection commerce.produtos
// 2023-02-18T19:11:24.964+0000    5 document(s) restored successfully. 0 document(s) failed to restore.