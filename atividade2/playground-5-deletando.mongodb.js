const database = 'BD3-AULA';
const collection = 'bd3-aula-collection';
use(database);


db[collection].deleteMany(
    {autor: 'Isaac Asimov'}
)

db[collection].find();