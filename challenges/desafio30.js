// 30 - Remova o campo curtidas do item Big Mac
// Para isso, escreva no arquivo desafio30.js duas queries, nesta ordem:
// Crie uma query que faça a remoção do campo curtidas do item Big Mac.

db.produtos
  .updateMany(
    { nome: "Big Mac" },
    // https://www.mongodb.com/docs/manual/reference/operator/update/unset/
    // The specified value in the $unset expression (i.e. "") does not impact the operation.
    { $unset: { curtidas: "999" } },
  );

// Crie uma query que retorne o nome para todos os documentos e curtidas (exceto para Big Mac).

db.produtos
  .find({ }, { _id: 0, nome: true, curtidas: true });

// root@cac03e7a617f:/app# ./scripts/evaluate.sh desafio30
// { "ok" : 1 }
// produtos.bson
// 2023-02-18T19:31:34.155+0000    checking for collection data in /app/assets/produtos/produtos.bson
// 2023-02-18T19:31:34.155+0000    reading metadata for commerce.produtos from /app/assets/produtos/produtos.metadata.json
// 2023-02-18T19:31:34.435+0000    restoring commerce.produtos from /app/assets/produtos/produtos.bson
// 2023-02-18T19:31:34.467+0000    finished restoring commerce.produtos (5 documents, 0 failures)
// 2023-02-18T19:31:34.467+0000    no indexes to restore for collection commerce.produtos
// 2023-02-18T19:31:34.467+0000    5 document(s) restored successfully. 0 document(s) failed to restore.

// ======================= RESULTS =======================
// desafio30: passed 
// ======================= RESULTS =======================
// { "ok" : 1 }
// produtos.bson
// 2023-02-18T19:31:34.884+0000    checking for collection data in /app/assets/produtos/produtos.bson
// 2023-02-18T19:31:34.885+0000    reading metadata for commerce.produtos from /app/assets/produtos/produtos.metadata.json
// 2023-02-18T19:31:35.114+0000    restoring commerce.produtos from /app/assets/produtos/produtos.bson
// 2023-02-18T19:31:35.147+0000    finished restoring commerce.produtos (5 documents, 0 failures)
// 2023-02-18T19:31:35.147+0000    no indexes to restore for collection commerce.produtos
// 2023-02-18T19:31:35.147+0000    5 document(s) restored successfully. 0 document(s) failed to restore.