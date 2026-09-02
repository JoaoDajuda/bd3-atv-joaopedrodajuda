const database = 'BD3-NoSQL-AtlasMongoDB';
const collection = 'bd3-nosql-atv2';
use(database);

db['bd3-nosql-atv2'].deleteOne(
    {cod_aluno: '5'}
)