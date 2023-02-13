// 13 - Inclua o campo criadoPor em todos os documentos, colocando Ronald McDonald no valor desse campo
// Para isso, escreva no arquivo desafio13.js duas queries, nesta ordem:
// Crie uma query que adicione o campo criadoPor em todos os documentos, colocando "Ronald McDonald" no valor desse campo.

db.produtos
  .updateMany({ }, { $set: { criadoPor: "Ronald McDonald" } });

// Crie uma query que retorne o nome e criadoPor de todos os produtos.

db.produtos
  .find({ }, { _id: 0, nome: true, criadoPor: true });

// root@cac03e7a617f:/app# ./scripts/evaluate.sh desafio13
// { "ok" : 1 }
// produtos.bson
// 2023-02-13T22:22:25.176+0000 checking for collection data in /app/assets/produtos/produtos.bson
// 2023-02-13T22:22:25.177+0000 reading metadata for commerce.produtos from /app/assets/produtos/produtos.metadata.json
// 2023-02-13T22:22:25.419+0000 restoring commerce.produtos from /app/assets/produtos/produtos.bson
// 2023-02-13T22:22:25.459+0000 finished restoring commerce.produtos (5 documents, 0 failures)
// 2023-02-13T22:22:25.459+0000 no indexes to restore for collection commerce.produtos
// 2023-02-13T22:22:25.460+0000 5 document(s) restored successfully. 0 document(s) failed to restore.

// ======================= RESULTS =======================
// desafio13: passed 
// ======================= RESULTS =======================
// { "ok" : 1 }
// produtos.bson
// 2023-02-13T22:22:25.852+0000 checking for collection data in /app/assets/produtos/produtos.bson
// 2023-02-13T22:22:25.853+0000 reading metadata for commerce.produtos from /app/assets/produtos/produtos.metadata.json
// 2023-02-13T22:22:26.152+0000 restoring commerce.produtos from /app/assets/produtos/produtos.bson
// 2023-02-13T22:22:26.195+0000 finished restoring commerce.produtos (5 documents, 0 failures)
// 2023-02-13T22:22:26.195+0000 no indexes to restore for collection commerce.produtos
// 2023-02-13T22:22:26.195+0000 5 document(s) restored successfully. 0 document(s) failed to restore.
