// 24 - Ordene em todos os documentos os valores do array valoresNutricionais pelo campo percentual de forma decrescente
// Para isso, escreva no arquivo desafio24.js duas queries, nesta ordem:
// Crie uma query que faça em todos os documentos a ordenação dos valores do array valoresNutricionais pelo campo percentual de forma decrescente.

db.produtos
  .updateMany({ },
    { $push: { valoresNutricionais: {
    // De olho na dica: mesmo sem adicionar nenhum novo valor, para essa operação é necessário utilizar também o modificador $each.
    //   {
    //     "$sort": {
    //       "percentual": -1
    //     }
    //   }
      $each: [],
      $sort: { percentual: -1 },
    } } });

// Crie uma query que retorne o nome e valoresNutricionais de todos os documentos.

db.produtos
  .find({ }, { _id: 0, nome: true, valoresNutricionais: true });

// root@cac03e7a617f:/app# ./scripts/evaluate.sh desafio24
// { "ok" : 1 }
// produtos.bson
// 2023-02-18T14:31:32.481+0000    checking for collection data in /app/assets/produtos/produtos.bson
// 2023-02-18T14:31:32.482+0000    reading metadata for commerce.produtos from /app/assets/produtos/produtos.metadata.json
// 2023-02-18T14:31:32.743+0000    restoring commerce.produtos from /app/assets/produtos/produtos.bson
// 2023-02-18T14:31:32.790+0000    finished restoring commerce.produtos (5 documents, 0 failures)
// 2023-02-18T14:31:32.790+0000    no indexes to restore for collection commerce.produtos
// 2023-02-18T14:31:32.790+0000    5 document(s) restored successfully. 0 document(s) failed to restore.

// ======================= RESULTS =======================
// desafio24: passed 
// ======================= RESULTS =======================
// { "ok" : 1 }
// produtos.bson
// 2023-02-18T14:31:33.204+0000    checking for collection data in /app/assets/produtos/produtos.bson
// 2023-02-18T14:31:33.204+0000    reading metadata for commerce.produtos from /app/assets/produtos/produtos.metadata.json
// 2023-02-18T14:31:33.499+0000    restoring commerce.produtos from /app/assets/produtos/produtos.bson
// 2023-02-18T14:31:33.548+0000    finished restoring commerce.produtos (5 documents, 0 failures)
// 2023-02-18T14:31:33.548+0000    no indexes to restore for collection commerce.produtos
// 2023-02-18T14:31:33.548+0000    5 document(s) restored successfully. 0 document(s) failed to restore.