// 27 - Conte quantos produtos contém Mc no nome, sem considerar letras maiúsculas ou minúsculas
// Para isso, escreva a query no arquivo desafio27.js

db.produtos
//   .countDocuments({ nome: { $regex: /Mc/ } });
  .countDocuments({ nome: { $regex: /mC/, $options: "i" } });

// root@cac03e7a617f:/app# ./scripts/evaluate.sh desafio27
// { "ok" : 1 }
// produtos.bson
// 2023-02-18T19:02:46.286+0000    checking for collection data in /app/assets/produtos/produtos.bson
// 2023-02-18T19:02:46.287+0000    reading metadata for commerce.produtos from /app/assets/produtos/produtos.metadata.json
// 2023-02-18T19:02:46.548+0000    restoring commerce.produtos from /app/assets/produtos/produtos.bson
// 2023-02-18T19:02:46.590+0000    finished restoring commerce.produtos (5 documents, 0 failures)
// 2023-02-18T19:02:46.590+0000    no indexes to restore for collection commerce.produtos
// 2023-02-18T19:02:46.590+0000    5 document(s) restored successfully. 0 document(s) failed to restore.

// ======================= RESULTS =======================
// desafio27: passed 
// ======================= RESULTS =======================
// { "ok" : 1 }
// produtos.bson
// 2023-02-18T19:02:46.967+0000    checking for collection data in /app/assets/produtos/produtos.bson
// 2023-02-18T19:02:46.969+0000    reading metadata for commerce.produtos from /app/assets/produtos/produtos.metadata.json
// 2023-02-18T19:02:47.227+0000    restoring commerce.produtos from /app/assets/produtos/produtos.bson
// 2023-02-18T19:02:47.257+0000    finished restoring commerce.produtos (5 documents, 0 failures)
// 2023-02-18T19:02:47.257+0000    no indexes to restore for collection commerce.produtos
// 2023-02-18T19:02:47.257+0000    5 document(s) restored successfully. 0 document(s) failed to restore.