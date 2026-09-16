const database = 'BD3-NoSQL-Produtos';
const collection = 'BD3-NoSQL-Produtos';
use(database);
db.createCollection(collection);

db[collection].insertMany(
    [
        {
            "cod_produto": "1",
            "nome_produto": "Fone de Ouvido Bluetooth",
            "desc_produto": "Fone sem fio com cancelamento ativo de ruído.",
            "valor": 235
        },
        {
            "cod_produto": "2",
            "nome_produto": "Smartwatch Esportivo",
            "desc_produto": "Relógio inteligente com monitor cardíaco e GPS.",
            "valor": 499
        },
        {
            "cod_produto": "3",
            "nome_produto": "Teclado Mecânico RGB",
            "desc_produto": "Teclado gamer com iluminação personalizável.",
            "valor": 320
        },
        {
            "cod_produto": "4",
            "nome_produto": "Cadeira Ergonômica",
            "desc_produto": "Cadeira de escritório com apoio lombar ajustável.",
            "valor": 850
        },
        {
            "cod_produto": "5",
            "nome_produto": "Mochila para Notebook",
            "desc_produto": "Mochila impermeável com compartimento acolchoado.",
            "valor": 180
        },
        {
            "cod_produto": "6",
            "nome_produto": "Caixa de Som Portátil",
            "desc_produto": "Caixa bluetooth resistente à água com bateria de 12h.",
            "valor": 290
        },
        {
            "cod_produto": "7",
            "nome_produto": "Fritadeira Air Fryer",
            "desc_produto": "Fritadeira sem óleo com capacidade de 4 litros.",
            "valor": 1000
        },
        {
            "cod_produto": "8",
            "nome_produto": "SSD NVMe 1TB",
            "desc_produto": "Unidade de armazenamento de alta velocidade.",
            "valor": 550
        },
        {
            "cod_produto": "9",
            "nome_produto": "Monitor LED 24\"",
            "desc_produto": "Monitor Full HD com painel IPS e bordas finas.",
            "valor": 699
        },
        {
            "cod_produto": "10",
            "nome_produto": "Cafeteira Elétrica",
            "desc_produto": "Cafeteira programável com jarra de vidro.",
            "valor": 150
        }
    ]
)