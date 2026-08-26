// Criação do banco em arquivo próprio para evitar duplicidade
const database = 'BD3-NoSQL-AtlasMongoDB';
const collection = 'bd3-nosql-atv1';
use(database);
db.createCollection(collection);

