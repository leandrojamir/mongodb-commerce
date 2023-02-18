// 29 - Renomeie o campo descricao para descricaoSite em todos os documentos
// Para isso, escreva no arquivo desafio29.js duas queries, nesta ordem:
// Crie uma query que faça a renomeação do campo descricao para descricaoSite em todos os documentos.

// https://www.mongodb.com/docs/v5.0/reference/operator/update/rename/
// db.students.updateMany( {}, { $rename: { "nmae": "name" } } )
db.produtos
  .updateMany({ }, { $rename: { descricao: "descricaoSite" } });
  
// Crie uma query que retorne o nome e descricaoSite de todos os documentos.

db.produtos
  .find({ }, { _id: 0, nome: true, descricaoSite: true });

// root@cac03e7a617f:/app# ./scripts/evaluate.sh desafio29
// { "ok" : 1 }
// produtos.bson
// 2023-02-18T19:53:01.982+0000    checking for collection data in /app/assets/produtos/produtos.bson
// 2023-02-18T19:53:01.982+0000    reading metadata for commerce.produtos from /app/assets/produtos/produtos.metadata.json
// 2023-02-18T19:53:02.216+0000    restoring commerce.produtos from /app/assets/produtos/produtos.bson
// 2023-02-18T19:53:02.278+0000    finished restoring commerce.produtos (5 documents, 0 failures)
// 2023-02-18T19:53:02.278+0000    no indexes to restore for collection commerce.produtos
// 2023-02-18T19:53:02.278+0000    5 document(s) restored successfully. 0 document(s) failed to restore.

// ======================= RESULTS =======================
// desafio29: passed 
// ======================= RESULTS =======================
// { "ok" : 1 }
// produtos.bson
// 2023-02-18T19:53:02.715+0000    checking for collection data in /app/assets/produtos/produtos.bson
// 2023-02-18T19:53:02.716+0000    reading metadata for commerce.produtos from /app/assets/produtos/produtos.metadata.json
// 2023-02-18T19:53:03.060+0000    restoring commerce.produtos from /app/assets/produtos/produtos.bson
// 2023-02-18T19:53:03.159+0000    finished restoring commerce.produtos (5 documents, 0 failures)
// 2023-02-18T19:53:03.159+0000    no indexes to restore for collection commerce.produtos
// 2023-02-18T19:53:03.159+0000    5 document(s) restored successfully. 0 document(s) failed to restore.