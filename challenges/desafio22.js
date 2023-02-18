// 22 - Adicione a quantidade de vendas dos sanduíches por dia da semana
// Para isso, escreva no arquivo desafio22.js quatro queries, nesta ordem:
// Crie uma query que inclua um campo vendasPorDia em todos os sanduíches. O valor deste campo deverá ser um array com sete posições. Cada uma delas representará um dia da semana, e cada posição iniciará em 0. O array deve seguir a estrutura do exemplo abaixo:
// "vendasPorDia": [0, 0, 0, 0, 0, 0, 0]
// O primeiro item desse array representa as vendas no domingo, o segundo item representa as vendas na segunda-feira, e assim sucessivamente até chegar ao último item, que representa as vendas no sábado.

db.produtos
  .updateMany({ }, { $set: { vendasPorDia: [0, 0, 0, 0, 0, 0, 0] } });

// Crie uma query que incremente as vendas de Big Mac às quartas-feiras em 60.
// vendasPorDia[0, 1, 2, 3, 4, 5, 6]
// vendasPorDia[D, S, T, Q, Q, S, S]

db.produtos
  .updateMany(
    { nome: "Big Mac" },
    { $inc: { "vendasPorDia.3": 60 } },
  );

//   "descricao": "Não existe nada igual\nDois hambúrgures, alface, queijo, molho especial, cebola e picles num pão com gergelim",
//   "curtidas": 145,
//   "vendidos": 137,
//   "vendasPorDia": [
//     0,
//     0,
//     0,
//     9999,
//     0,
//     0,
//     0
//   ]
// }

// Crie uma query que incremente as vendas de todos os sanduíches de carne do tipo bovino aos sábados em 120.

db.produtos
  .updateMany(
    { tags: { $elemMatch: { $eq: "bovino" } } },
    { $inc: { "vendasPorDia.6": 120 } },
  );

// Crie uma query que retorne o nome e vendasPorDia de todos os documentos

db.produtos
  .find({ }, { _id: 0, nome: true, vendasPorDia: true });

// root@cac03e7a617f:/app# ./scripts/evaluate.sh desafio22
// { "ok" : 1 }
// produtos.bson
// 2023-02-18T13:22:38.770+0000    checking for collection data in /app/assets/produtos/produtos.bson
// 2023-02-18T13:22:38.770+0000    reading metadata for commerce.produtos from /app/assets/produtos/produtos.metadata.json
// 2023-02-18T13:22:39.029+0000    restoring commerce.produtos from /app/assets/produtos/produtos.bson
// 2023-02-18T13:22:39.056+0000    finished restoring commerce.produtos (5 documents, 0 failures)
// 2023-02-18T13:22:39.056+0000    no indexes to restore for collection commerce.produtos
// 2023-02-18T13:22:39.056+0000    5 document(s) restored successfully. 0 document(s) failed to restore.

// ======================= RESULTS =======================
// desafio22: passed 
// ======================= RESULTS =======================
// { "ok" : 1 }
// produtos.bson
// 2023-02-18T13:22:39.649+0000    checking for collection data in /app/assets/produtos/produtos.bson
// 2023-02-18T13:22:39.650+0000    reading metadata for commerce.produtos from /app/assets/produtos/produtos.metadata.json
// 2023-02-18T13:22:39.926+0000    restoring commerce.produtos from /app/assets/produtos/produtos.bson
// 2023-02-18T13:22:39.961+0000    finished restoring commerce.produtos (5 documents, 0 failures)
// 2023-02-18T13:22:39.962+0000    no indexes to restore for collection commerce.produtos
// 2023-02-18T13:22:39.962+0000    5 document(s) restored successfully. 0 document(s) failed to restore.