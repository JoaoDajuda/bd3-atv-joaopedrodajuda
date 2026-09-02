const database = 'BD3-NoSQL-AtlasMongoDB';
const collection = 'bd3-nosql-atv2';
use(database);

db['bd3-nosql-atv2'].updateOne(
    {cod_aluno: "1"},
    {
        $set:{nome: "Camila Alterada"}
    }  
);

db['bd3-nosql-atv2'].updateOne(
    {cod_aluno: "2"},
    {
        $set:{rg: "310"}
    }  
);

db['bd3-nosql-atv2'].updateOne(
    {cod_aluno: "3"},
    {
        $set:{cpf: "32659123459"}
    }  
);
db[collection].find();