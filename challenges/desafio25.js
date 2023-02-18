// 25 - Adicione o valor muito sódio ao final do array tags nos produtos em que o percentual de sódio seja maior ou igual a 40
// Para isso, escreva no arquivo desafio25.js duas queries, nesta ordem:
// Crie uma query que faça a adição do valor muito sódio ao final do array tags nos produtos em que o percentual de sódio seja maior ou igual a 40.

db.produtos
  .updateMany(
    { valoresNutricionais: { $elemMatch: {
      tipo: "sódio",
      percentual: { $gte: 40 },
    } } },
    { $push: { tags: "muito sódio" } },
  );

// Crie uma query que retorne o nome e tags de todos os documentos.
  
db.produtos
  .find({ }, { _id: 0, nome: true, tags: true });

// root@cac03e7a617f:/app# ./scripts/evaluate.sh desafio25
// { "ok" : 1 }
// produtos.bson
// 2023-02-18T18:38:09.336+0000    checking for collection data in /app/assets/produtos/produtos.bson
// 2023-02-18T18:38:09.336+0000    reading metadata for commerce.produtos from /app/assets/produtos/produtos.metadata.json
// 2023-02-18T18:38:09.595+0000    restoring commerce.produtos from /app/assets/produtos/produtos.bson
// 2023-02-18T18:38:09.634+0000    finished restoring commerce.produtos (5 documents, 0 failures)
// 2023-02-18T18:38:09.635+0000    no indexes to restore for collection commerce.produtos
// 2023-02-18T18:38:09.635+0000    5 document(s) restored successfully. 0 document(s) failed to restore.

// ======================= RESULTS =======================
// desafio25: passed 
// ======================= RESULTS =======================
// { "ok" : 1 }
// produtos.bson
// 2023-02-18T18:38:10.080+0000    checking for collection data in /app/assets/produtos/produtos.bson
// 2023-02-18T18:38:10.080+0000    reading metadata for commerce.produtos from /app/assets/produtos/produtos.metadata.json
// 2023-02-18T18:38:10.351+0000    restoring commerce.produtos from /app/assets/produtos/produtos.bson
// 2023-02-18T18:38:10.403+0000    finished restoring commerce.produtos (5 documents, 0 failures)
// 2023-02-18T18:38:10.404+0000    no indexes to restore for collection commerce.produtos
// 2023-02-18T18:38:10.404+0000    5 document(s) restored successfully. 0 document(s) failed to restore.