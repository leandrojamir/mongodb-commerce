// 15 - Adicione o campo avaliacao em todos os documentos da coleção e efetue alterações nesse campo
// Para isso, escreva no arquivo desafio15.js quatro queries, nesta ordem:
// Crie uma query que inclua o campo avaliacao do tipo NumberInt, com o valor 0 em todos os documentos da coleção.

db.produtos
  .updateMany({ }, { $set: { avaliacao: NumberInt(0) } });

// Crie uma query que incremente o valor do campo avaliacao em 5 em todos os sanduíches de carne do tipo bovino.

db.produtos
  .updateMany(
    { tags: { $elemMatch: { $eq: "bovino" } } },
    { $inc: { avaliacao: 5 } },
  );

// Crie uma query que incremente o valor do campo avaliacao em 3 em todos os sanduíches de ave.

db.produtos
  .updateMany(
    { tags: { $elemMatch: { $eq: "ave" } } },
    { $inc: { avaliacao: 3 } },
  );

// Crie uma query que retorne o nome e avaliacao de todos os sanduíches.

db.produtos
  .find({ }, { _id: 0, nome: true, avaliacao: true });

// root@cac03e7a617f:/app# ./scripts/evaluate.sh desafio15
// { "ok" : 1 }
// produtos.bson
// 2023-02-18T00:37:46.463+0000    checking for collection data in /app/assets/produtos/produtos.bson
// 2023-02-18T00:37:46.465+0000    reading metadata for commerce.produtos from /app/assets/produtos/produtos.metadata.json
// 2023-02-18T00:37:46.905+0000    restoring commerce.produtos from /app/assets/produtos/produtos.bson
// 2023-02-18T00:37:46.992+0000    finished restoring commerce.produtos (5 documents, 0 failures)
// 2023-02-18T00:37:46.992+0000    no indexes to restore for collection commerce.produtos
// 2023-02-18T00:37:46.992+0000    5 document(s) restored successfully. 0 document(s) failed to restore.

// ======================= RESULTS =======================
// desafio15: passed 
// ======================= RESULTS =======================
// { "ok" : 1 }
// produtos.bson
// 2023-02-18T00:37:47.477+0000    checking for collection data in /app/assets/produtos/produtos.bson
// 2023-02-18T00:37:47.477+0000    reading metadata for commerce.produtos from /app/assets/produtos/produtos.metadata.json
// 2023-02-18T00:37:48.094+0000    restoring commerce.produtos from /app/assets/produtos/produtos.bson
// 2023-02-18T00:37:48.139+0000    finished restoring commerce.produtos (5 documents, 0 failures)
// 2023-02-18T00:37:48.139+0000    no indexes to restore for collection commerce.produtos
// 2023-02-18T00:37:48.139+0000    5 document(s) restored successfully. 0 document(s) failed to restore.