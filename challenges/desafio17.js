// 17 - Retorne a quantidade total de produtos em uma nova coleção chamada resumoProdutos
// Para isso, escreva no arquivo desafio17.js duas queries, nesta ordem:
// Crie uma query que insira na coleção resumoProdutos um documento com os campos: franquia com o valor McDonalds e totalProdutos com o valor sendo a quantidade total de produtos registrados na coleção produtos.

db.resumoProdutos
  .insertOne({ franquia: "McDonalds", totalProdutos: db.produtos.countDocuments({ }) });

// /commerce.resumoProdutos:{"$oid":"63f02156cba4d2a2ae50226e"}.json
// {
//     "_id": {
//       "$oid": "63f02156cba4d2a2ae50226e"
//     },
//     "franquia": "McDonalds",
//     "totalProdutos": 5
//   }

// Crie uma query que retorne os campos franquia e o totalProdutos da coleção resumoProdutos, resultantes da primeira query.

db.resumoProdutos
  .find({ }, { _id: 0, franquia: true, totalProdutos: true });

// root@cac03e7a617f:/app# ./scripts/evaluate.sh desafio17
// { "ok" : 1 }
// produtos.bson
// 2023-02-18T00:56:46.621+0000    checking for collection data in /app/assets/produtos/produtos.bson
// 2023-02-18T00:56:46.621+0000    reading metadata for commerce.produtos from /app/assets/produtos/produtos.metadata.json
// 2023-02-18T00:56:46.926+0000    restoring commerce.produtos from /app/assets/produtos/produtos.bson
// 2023-02-18T00:56:46.945+0000    finished restoring commerce.produtos (5 documents, 0 failures)
// 2023-02-18T00:56:46.945+0000    no indexes to restore for collection commerce.produtos
// 2023-02-18T00:56:46.945+0000    5 document(s) restored successfully. 0 document(s) failed to restore.

// ======================= RESULTS =======================
// desafio17: passed 
// ======================= RESULTS =======================
// { "ok" : 1 }
// produtos.bson
// 2023-02-18T00:56:47.640+0000    checking for collection data in /app/assets/produtos/produtos.bson
// 2023-02-18T00:56:47.641+0000    reading metadata for commerce.produtos from /app/assets/produtos/produtos.metadata.json
// 2023-02-18T00:56:47.948+0000    restoring commerce.produtos from /app/assets/produtos/produtos.bson
// 2023-02-18T00:56:47.967+0000    finished restoring commerce.produtos (5 documents, 0 failures)
// 2023-02-18T00:56:47.967+0000    no indexes to restore for collection commerce.produtos
// 2023-02-18T00:56:47.967+0000    5 document(s) restored successfully. 0 document(s) failed to restore.