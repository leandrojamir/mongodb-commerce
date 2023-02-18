// 16 - Adicione o campo ultimaModificacao com a data corrente somente no sanduíche Big Mac
// Para isso, escreva no arquivo desafio16.js duas queries, nesta ordem:
// Crie uma query que inclua somente ao sanduíche Big Mac o campo ultimaModificacao com a data corrente. Para a data corrente faça uso do tipo date ou timestamp.

db.produtos
  .updateOne({ nome: "Big Mac" }, { $set: { ultimaModificacao: Date() } });

//   "descricao": "Não existe nada igual\nDois hambúrgures, alface, queijo, molho especial, cebola e picles num pão com gergelim",
//   "curtidas": 145,
//   "vendidos": 137,
//   "ultimaModificacao": "Fri Feb 17 2023 21:44:36 GMT-0300 (Horário Padrão de Brasília)"
// }

// Crie uma query que retorne o nome de todos os documentos em que o campo ultimaModificacao existe.

db.produtos
  .find({ ultimaModificacao: { $exists: true } }, { _id: 0, nome: true });

// root@cac03e7a617f:/app# ./scripts/evaluate.sh desafio16
// { "ok" : 1 }
// produtos.bson
// 2023-02-18T00:45:54.695+0000    checking for collection data in /app/assets/produtos/produtos.bson
// 2023-02-18T00:45:54.697+0000    reading metadata for commerce.produtos from /app/assets/produtos/produtos.metadata.json
// 2023-02-18T00:45:54.968+0000    restoring commerce.produtos from /app/assets/produtos/produtos.bson
// 2023-02-18T00:45:55.001+0000    finished restoring commerce.produtos (5 documents, 0 failures)
// 2023-02-18T00:45:55.001+0000    no indexes to restore for collection commerce.produtos
// 2023-02-18T00:45:55.001+0000    5 document(s) restored successfully. 0 document(s) failed to restore.

// ======================= RESULTS =======================
// desafio16: passed 
// ======================= RESULTS =======================
// { "ok" : 1 }
// produtos.bson
// 2023-02-18T00:45:55.490+0000    checking for collection data in /app/assets/produtos/produtos.bson
// 2023-02-18T00:45:55.491+0000    reading metadata for commerce.produtos from /app/assets/produtos/produtos.metadata.json
// 2023-02-18T00:45:55.792+0000    restoring commerce.produtos from /app/assets/produtos/produtos.bson
// 2023-02-18T00:45:55.858+0000    finished restoring commerce.produtos (5 documents, 0 failures)
// 2023-02-18T00:45:55.858+0000    no indexes to restore for collection commerce.produtos
// 2023-02-18T00:45:55.858+0000    5 document(s) restored successfully. 0 document(s) failed to restore.