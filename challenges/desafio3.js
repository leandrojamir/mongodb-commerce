// 3 - Retorne o lanche mais vendido, mostrando apenas o nome e a quantidade do lanche mais vendido
// Para isso, escreva a query no arquivo desafio3.js

db.produtos
  .find({ }, { _id: 0, nome: true, vendidos: true })
  .limit(1);

// root@cac03e7a617f:/app# ./scripts/evaluate.sh desafio3
// { "ok" : 1 }
// produtos.bson
// 2023-02-07T18:34:05.676+0000 checking for collection data in /app/assets/produtos/produtos.bson
// 2023-02-07T18:34:05.676+0000 reading metadata for commerce.produtos from /app/assets/produtos/produtos.metadata.json
// 2023-02-07T18:34:05.950+0000 restoring commerce.produtos from /app/assets/produtos/produtos.bson
// 2023-02-07T18:34:06.003+0000 finished restoring commerce.produtos (5 documents, 0 failures)
// 2023-02-07T18:34:06.003+0000 no indexes to restore for collection commerce.produtos
// 2023-02-07T18:34:06.003+0000 5 document(s) restored successfully. 0 document(s) failed to restore.

// ======================= RESULTS =======================
// desafio3: passed 
// ======================= RESULTS =======================
// { "ok" : 1 }
// produtos.bson
// 2023-02-07T18:34:06.364+0000 checking for collection data in /app/assets/produtos/produtos.bson
// 2023-02-07T18:34:06.364+0000 reading metadata for commerce.produtos from /app/assets/produtos/produtos.metadata.json
// 2023-02-07T18:34:06.582+0000 restoring commerce.produtos from /app/assets/produtos/produtos.bson
// 2023-02-07T18:34:06.624+0000 finished restoring commerce.produtos (5 documents, 0 failures)
// 2023-02-07T18:34:06.624+0000 no indexes to restore for collection commerce.produtos
// 2023-02-07T18:34:06.624+0000 5 document(s) restored successfully. 0 document(s) failed to restore.
