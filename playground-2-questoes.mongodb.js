const database = 'BD3-NoSQL-AtlasMongoDB';
use(database);
db['bd3-nosql-atv1'].insertMany(
    [
        
        {
            "cod_aluno": "1",
            "cod_turma": "1",
            "nome": "Carlos Eduardo",
            "cpf": "89384828528",
            "rg": 120,
            "telefone_aluno":"11961128356",
            "telefone_responsavel": "93859302650",
            "email": "carlinhu200@gmail.com",
            "data_nascimento": "03/10/2004"
        },
        {
            "cod_aluno": "2",
            "cod_turma": "1",
            "nome": "Mariana Oliveira",
            "cpf": "10293847561",
            "rg": 121,
            "telefone_aluno": "11987654321",
            "telefone_responsavel": "11912345678",
            "email": "mariana.oliveira@gmail.com",
            "data_nascimento": "12/04/2005"
        },
        {
            "cod_aluno": "3",
            "cod_turma": "1",
            "nome": "Lucas Gabriel Santos",
            "cpf": "20394857612",
            "rg": 122,
            "telefone_aluno": "11976543210",
            "telefone_responsavel": "11923456789",
            "email": "lucas.gabriel@gmail.com",
            "data_nascimento": "22/08/2004"
        },
        {
            "cod_aluno": "4",
            "cod_turma": "1",
            "nome": "Beatriz Lima",
            "cpf": "30495867123",
            "rg": 123,
            "telefone_aluno": "11965432109",
            "telefone_responsavel": "11934567890",
            "email": "bia.lima@gmail.com",
            "data_nascimento": "05/11/2005"
        },
        {
            "cod_aluno": "5",
            "cod_turma": "2",
            "nome": "Gabriel Ferreira",
            "cpf": "40596871234",
            "rg": 124,
            "telefone_aluno": "11954321098",
            "telefone_responsavel": "11945678901",
            "email": "gabriel.ferreira@gmail.com",
            "data_nascimento": "18/01/2004"
        },
        {
            "cod_aluno": "6",
            "cod_turma": "2",
            "nome": "Juliana Costa",
            "cpf": "50697812345",
            "rg": 125,
            "telefone_aluno": "11943210987",
            "telefone_responsavel": "11956789012",
            "email": "juju.costa@gmail.com",
            "data_nascimento": "30/09/2005"
        },
        {
            "cod_aluno": "7",
            "cod_turma": "2",
            "nome": "Matheus Rodrigues",
            "cpf": "60798123456",
            "rg": 126,
            "telefone_aluno": "11932109876",
            "telefone_responsavel": "11967890123",
            "email": "matheus.rod@gmail.com",
            "data_nascimento": "14/02/2004"
        },
        {
            "cod_aluno": "8",
            "cod_turma": "3",
            "nome": "Larissa Almeida",
            "cpf": "70891234567",
            "rg": 127,
            "telefone_aluno": "11921098765",
            "telefone_responsavel": "11978901234",
            "email": "lari.almeida@gmail.com",
            "data_nascimento": "07/07/2005"
        },
        {
            "cod_aluno": "9",
            "cod_turma": "3",
            "nome": "Thiago Martins",
            "cpf": "80912345678",
            "rg": 128,
            "telefone_aluno": "11910987654",
            "telefone_responsavel": "11989012345",
            "email": "thiago.martins@gmail.com",
            "data_nascimento": "25/12/2004"
        },
        {
            "cod_aluno": "10",
            "cod_turma": "3",
            "nome": "Camila Pereira",
            "cpf": "90123456789",
            "rg": 129,
            "telefone_aluno": "11909876543",
            "telefone_responsavel": "11990123456",
            "email": "camila.pereira@gmail.com",
            "data_nascimento": "01/03/2005"
        },
    ]); 
// Questão A
db['bd3-nosql-atv1'].find();
// Questão B 
db['bd3-nosql-atv1'].find({"cpf": "89384828528"}, {"cod_aluno": 0});
// Questão C
db['bd3-nosql-atv1'].find({"cpf": "89384828528"}, {"cod_aluno": 0, "cod_turma": 0});