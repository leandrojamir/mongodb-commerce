// 12 - Adicione ketchup aos ingredientes para todos os sanduíches menos o McChicken, garantindo que não haja duplicidade nos ingredientes
// Para isso, escreva no arquivo desafio12.js duas queries, nesta ordem:
// Crie uma query que adicione ketchup aos ingredientes para todos os sanduíches menos o McChicken, garantindo que não haja duplicidade nos ingredientes.

db.produtos
  .updateMany(
    { nome: { $ne: "McChicken" } },
    { $addToSet: { ingredientes: { $each: ["ketchup"] } } },
  );

// Crie uma query que retorne o nome e ingredientes de todos os documentos.

db.produtos
  .find({}, { _id: 0, nome: true, ingredientes: true });

// root@cac03e7a617f:/app# ./scripts/evaluate.sh desafio12
// { "ok" : 1 }
// produtos.bson
// 2023-02-13T21:46:32.094+0000 checking for collection data in /app/assets/produtos/produtos.bson
// 2023-02-13T21:46:32.094+0000 reading metadata for commerce.produtos from /app/assets/produtos/produtos.metadata.json
// 2023-02-13T21:46:32.351+0000 restoring commerce.produtos from /app/assets/produtos/produtos.bson
// 2023-02-13T21:46:32.387+0000 finished restoring commerce.produtos (5 documents, 0 failures)
// 2023-02-13T21:46:32.388+0000 no indexes to restore for collection commerce.produtos
// 2023-02-13T21:46:32.388+0000 5 document(s) restored successfully. 0 document(s) failed to restore.

// ======================= RESULTS =======================
// desafio12: passed 
// ======================= RESULTS =======================
// { "ok" : 1 }
// produtos.bson
// 2023-02-13T21:46:32.822+0000 checking for collection data in /app/assets/produtos/produtos.bson
// 2023-02-13T21:46:32.822+0000 reading metadata for commerce.produtos from /app/assets/produtos/produtos.metadata.json
// 2023-02-13T21:46:33.081+0000 restoring commerce.produtos from /app/assets/produtos/produtos.bson
// 2023-02-13T21:46:33.105+0000 finished restoring commerce.produtos (5 documents, 0 failures)
// 2023-02-13T21:46:33.105+0000 no indexes to restore for collection commerce.produtos
// 2023-02-13T21:46:33.105+0000 5 document(s) restored successfully. 0 document(s) failed to restore.
