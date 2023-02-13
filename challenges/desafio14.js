// 14 - Crie uma query que retorne todos os lanches que possuem picles em seus ingredientes e mostre apenas os 3 primeiros itens contidos no array valoresNutricionais
// Para isso, escreva a query no arquivo desafio14.js
// Sua query deve retornar apenas os campos nome, ingredientes e valoresNutricionais.

db.produtos
  .find({ ingredientes: "picles" },
  // https://app.betrybe.com/learn/course/5e938f69-6e32-43b3-9685-c936530fd326/module/94d0e996-1827-4fbc-bc24-c99fb592925b/section/d2b16462-a889-47fc-aa04-92517825b186/day/9aa9cc0e-6e53-4986-a5fe-7b93df92375f/lesson/df071bd5-6d59-499f-a8e2-3859d1529710
  { _id: 0, nome: true, ingredientes: true, valoresNutricionais: { $slice: 3 } });

// root@cac03e7a617f:/app# ./scripts/evaluate.sh desafio14
// { "ok" : 1 }
// produtos.bson
// 2023-02-13T22:42:43.613+0000 checking for collection data in /app/assets/produtos/produtos.bson
// 2023-02-13T22:42:43.613+0000 reading metadata for commerce.produtos from /app/assets/produtos/produtos.metadata.json
// 2023-02-13T22:42:43.869+0000 restoring commerce.produtos from /app/assets/produtos/produtos.bson
// 2023-02-13T22:42:43.916+0000 finished restoring commerce.produtos (5 documents, 0 failures)
// 2023-02-13T22:42:43.917+0000 no indexes to restore for collection commerce.produtos
// 2023-02-13T22:42:43.917+0000 5 document(s) restored successfully. 0 document(s) failed to restore.

// ======================= RESULTS =======================
// desafio14: passed 
// ======================= RESULTS =======================
// { "ok" : 1 }
// produtos.bson
// 2023-02-13T22:42:44.386+0000 checking for collection data in /app/assets/produtos/produtos.bson
// 2023-02-13T22:42:44.387+0000 reading metadata for commerce.produtos from /app/assets/produtos/produtos.metadata.json
// 2023-02-13T22:42:44.698+0000 restoring commerce.produtos from /app/assets/produtos/produtos.bson
// 2023-02-13T22:42:44.724+0000 finished restoring commerce.produtos (5 documents, 0 failures)
// 2023-02-13T22:42:44.724+0000 no indexes to restore for collection commerce.produtos
// 2023-02-13T22:42:44.724+0000 5 document(s) restored successfully. 0 document(s) failed to restore.
