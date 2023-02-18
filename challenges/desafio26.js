// 26 - Adicione o valor contém sódio ao final do array tags nos produtos em que o percentual de sódio seja maior do que 20 e menor do que 40
// Para isso, escreva no arquivo desafio26.js duas queries, nesta ordem:
// Crie uma query que faça a adição do valor contém sódio ao final do array tags nos produtos em que o percentual de sódio seja maior do que 20 e menor do que 40.

db.produtos
  .updateMany(
    { valoresNutricionais: { $elemMatch: {
      tipo: "sódio",
      percentual: { $gt: 20, $lt: 40 },
    } } },
    { $push: { tags: "contém sódio" } },
  );
  
// Crie uma query que retorne o nome e tags de todos os documentos.

db.produtos
  .find({ }, { _id: 0, nome: true, tags: true });

// root@cac03e7a617f:/app# ./scripts/evaluate.sh desafio26
// { "ok" : 1 }
// produtos.bson
// 2023-02-18T18:49:37.882+0000    checking for collection data in /app/assets/produtos/produtos.bson
// 2023-02-18T18:49:37.882+0000    reading metadata for commerce.produtos from /app/assets/produtos/produtos.metadata.json
// 2023-02-18T18:49:38.123+0000    restoring commerce.produtos from /app/assets/produtos/produtos.bson
// 2023-02-18T18:49:38.150+0000    finished restoring commerce.produtos (5 documents, 0 failures)
// 2023-02-18T18:49:38.150+0000    no indexes to restore for collection commerce.produtos
// 2023-02-18T18:49:38.150+0000    5 document(s) restored successfully. 0 document(s) failed to restore.

// ======================= RESULTS =======================
// desafio26: passed 
// ======================= RESULTS =======================
// { "ok" : 1 }
// produtos.bson
// 2023-02-18T18:49:38.532+0000    checking for collection data in /app/assets/produtos/produtos.bson
// 2023-02-18T18:49:38.533+0000    reading metadata for commerce.produtos from /app/assets/produtos/produtos.metadata.json
// 2023-02-18T18:49:38.806+0000    restoring commerce.produtos from /app/assets/produtos/produtos.bson
// 2023-02-18T18:49:38.844+0000    finished restoring commerce.produtos (5 documents, 0 failures)
// 2023-02-18T18:49:38.844+0000    no indexes to restore for collection commerce.produtos
// 2023-02-18T18:49:38.844+0000    5 document(s) restored successfully. 0 document(s) failed to restore.