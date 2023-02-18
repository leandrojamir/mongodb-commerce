// 21 - Remova o último ingrediente do sanduíche Cheddar McMelt
// Para isso, escreva no arquivo desafio21.js duas queries, nesta ordem:
// Crie uma query que faça a remoção do último ingrediente no sanduíche Cheddar McMelt.

db.produtos
  .updateMany(
    { nome: "Cheddar McMelt" },
    // idem 20 com pop normal 1 https://www.mongodb.com/docs/manual/reference/operator/update/pop/
    { $pop: { ingredientes: 1 } },  
  );

// Crie uma query que retorne o nome e ingredientes de todos os documentos.

db.produtos
  .find({ }, { _id: 0, nome: true, ingredientes: true });

// 2023-02-18T12:56:19.299+0000    5 document(s) restored successfully. 0 document(s) failed to restore.
// root@cac03e7a617f:/app# ./scripts/evaluate.sh desafio21
// { "ok" : 1 }
// produtos.bson
// 2023-02-18T13:09:51.782+0000    checking for collection data in /app/assets/produtos/produtos.bson
// 2023-02-18T13:09:51.782+0000    reading metadata for commerce.produtos from /app/assets/produtos/produtos.metadata.json
// 2023-02-18T13:09:52.042+0000    restoring commerce.produtos from /app/assets/produtos/produtos.bson
// 2023-02-18T13:09:52.085+0000    finished restoring commerce.produtos (5 documents, 0 failures)
// 2023-02-18T13:09:52.086+0000    no indexes to restore for collection commerce.produtos
// 2023-02-18T13:09:52.086+0000    5 document(s) restored successfully. 0 document(s) failed to restore.

// ======================= RESULTS =======================
// desafio21: passed 
// ======================= RESULTS =======================
// { "ok" : 1 }
// produtos.bson
// 2023-02-18T13:09:52.579+0000    checking for collection data in /app/assets/produtos/produtos.bson
// 2023-02-18T13:09:52.579+0000    reading metadata for commerce.produtos from /app/assets/produtos/produtos.metadata.json
// 2023-02-18T13:09:52.877+0000    restoring commerce.produtos from /app/assets/produtos/produtos.bson
// 2023-02-18T13:09:52.932+0000    finished restoring commerce.produtos (5 documents, 0 failures)
// 2023-02-18T13:09:52.932+0000    no indexes to restore for collection commerce.produtos
// 2023-02-18T13:09:52.932+0000    5 document(s) restored successfully. 0 document(s) failed to restore.