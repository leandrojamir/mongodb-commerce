// 4 - Retorne os lanches que tiveram vendas maiores que 50 e menores que 100, mostrando apenas o nome e a quantidade de lanches vendidos em ordem crescente
// Para isso, escreva a query no arquivo desafio4.js

db.produtos
  .find({ vendidos: { $gt: 50, $lt: 100 } }, { _id: 0, nome: true, vendidos: true })
  .sort({ vendidos: 1 });

// root@cac03e7a617f:/app# ./scripts/evaluate.sh desafio4
// { "ok" : 1 }
// produtos.bson
// 2023-02-07T18:45:07.657+0000 checking for collection data in /app/assets/produtos/produtos.bson
// 2023-02-07T18:45:07.658+0000 reading metadata for commerce.produtos from /app/assets/produtos/produtos.metadata.json
// 2023-02-07T18:45:07.944+0000 restoring commerce.produtos from /app/assets/produtos/produtos.bson
// 2023-02-07T18:45:07.971+0000 finished restoring commerce.produtos (5 documents, 0 failures)
// 2023-02-07T18:45:07.971+0000 no indexes to restore for collection commerce.produtos
// 2023-02-07T18:45:07.971+0000 5 document(s) restored successfully. 0 document(s) failed to restore.

// ======================= RESULTS =======================
// desafio4: passed 
// ======================= RESULTS =======================
// { "ok" : 1 }
// produtos.bson
// 2023-02-07T18:45:08.341+0000 checking for collection data in /app/assets/produtos/produtos.bson
// 2023-02-07T18:45:08.341+0000 reading metadata for commerce.produtos from /app/assets/produtos/produtos.metadata.json
// 2023-02-07T18:45:08.574+0000 restoring commerce.produtos from /app/assets/produtos/produtos.bson
// 2023-02-07T18:45:08.619+0000 finished restoring commerce.produtos (5 documents, 0 failures)
// 2023-02-07T18:45:08.619+0000 no indexes to restore for collection commerce.produtos
// 2023-02-07T18:45:08.619+0000 5 document(s) restored successfully. 0 document(s) failed to restore.
