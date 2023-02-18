// 20 - Remova o primeiro ingrediente do sanduíche Quarteirão com Queijo
// Para isso, escreva no arquivo desafio20.js duas queries, nesta ordem:
// Crie uma query que faça a remoção do primeiro ingrediente no sanduíche Quarteirão com Queijo.

db.produtos
  .updateMany(
    { nome: "Quarteirão com Queijo" },
    { $pop: { ingredientes: -1 } },  
  );

//   "nome": "Quarteirão com Queijo",
//   "ingredientes": [
//     "queijo",
//     "cebola",
//     "picles",
//     "pão com gergelim",
//     "ketchup",
//     "mostarda"
//   ],

// Crie uma query que retorne o nome e ingredientes de todos os documentos.

db.produtos
  .find({ }, { _id: 0, nome: true, ingredientes: true });

// root@cac03e7a617f:/app# ./scripts/evaluate.sh desafio20
// { "ok" : 1 }
// produtos.bson
// 2023-02-18T12:56:18.159+0000    checking for collection data in /app/assets/produtos/produtos.bson
// 2023-02-18T12:56:18.159+0000    reading metadata for commerce.produtos from /app/assets/produtos/produtos.metadata.json
// 2023-02-18T12:56:18.423+0000    restoring commerce.produtos from /app/assets/produtos/produtos.bson
// 2023-02-18T12:56:18.462+0000    finished restoring commerce.produtos (5 documents, 0 failures)
// 2023-02-18T12:56:18.462+0000    no indexes to restore for collection commerce.produtos
// 2023-02-18T12:56:18.462+0000    5 document(s) restored successfully. 0 document(s) failed to restore.

// ======================= RESULTS =======================
// desafio20: passed 
// ======================= RESULTS =======================
// { "ok" : 1 }
// produtos.bson
// 2023-02-18T12:56:18.899+0000    checking for collection data in /app/assets/produtos/produtos.bson
// 2023-02-18T12:56:18.899+0000    reading metadata for commerce.produtos from /app/assets/produtos/produtos.metadata.json
// 2023-02-18T12:56:19.266+0000    restoring commerce.produtos from /app/assets/produtos/produtos.bson
// 2023-02-18T12:56:19.299+0000    finished restoring commerce.produtos (5 documents, 0 failures)
// 2023-02-18T12:56:19.299+0000    no indexes to restore for collection commerce.produtos
// 2023-02-18T12:56:19.299+0000    5 document(s) restored successfully. 0 document(s) failed to restore.