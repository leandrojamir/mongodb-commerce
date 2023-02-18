// 19 - Remova o item cebola de todos os sanduíches
// Para isso, escreva no arquivo desafio19.js duas queries, nesta ordem:
// Crie uma query que faça a remoção do item cebola em todos os sanduíches.

// semelhante ao 18, mas com pull
db.produtos
  .updateMany(
    { },
    { $pull: { ingredientes: "cebola" } },
  );
  
// Crie uma query que retorne o nome e ingredientes de todos os documentos.

db.produtos
  .find({ }, { _id: 0, nome: true, ingredientes: true });

// root@cac03e7a617f:/app# ./scripts/evaluate.sh desafio19
// { "ok" : 1 }
// produtos.bson
// 2023-02-18T01:23:18.249+0000    checking for collection data in /app/assets/produtos/produtos.bson
// 2023-02-18T01:23:18.250+0000    reading metadata for commerce.produtos from /app/assets/produtos/produtos.metadata.json
// 2023-02-18T01:23:18.503+0000    restoring commerce.produtos from /app/assets/produtos/produtos.bson
// 2023-02-18T01:23:18.555+0000    finished restoring commerce.produtos (5 documents, 0 failures)
// 2023-02-18T01:23:18.555+0000    no indexes to restore for collection commerce.produtos
// 2023-02-18T01:23:18.555+0000    5 document(s) restored successfully. 0 document(s) failed to restore.

// ======================= RESULTS =======================
// desafio19: passed 
// ======================= RESULTS =======================
// { "ok" : 1 }
// produtos.bson
// 2023-02-18T01:23:19.051+0000    checking for collection data in /app/assets/produtos/produtos.bson
// 2023-02-18T01:23:19.052+0000    reading metadata for commerce.produtos from /app/assets/produtos/produtos.metadata.json
// 2023-02-18T01:23:19.290+0000    restoring commerce.produtos from /app/assets/produtos/produtos.bson
// 2023-02-18T01:23:19.336+0000    finished restoring commerce.produtos (5 documents, 0 failures)
// 2023-02-18T01:23:19.336+0000    no indexes to restore for collection commerce.produtos
// 2023-02-18T01:23:19.336+0000    5 document(s) restored successfully. 0 document(s) failed to restore.