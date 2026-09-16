use('BD3-NoSQL-Produtos');
const collection = 'BD3-NoSQL-Produtos';

//B
db[collection].find({
    valor:{$gt:700}
});
//C
db[collection].find({
    valor:{$lt:450}
});
// D
db[collection].find({
    valor:{$gte: 500,$lte:950}
});