const COLECAO = 'BD3-NoSQL-Firestore';
const form = document.querySelector('#add-aluno-form');
const lista = document.querySelector('#aluno-list');

form.addEventListener('submit', (event)=>{
    event.preventDefault();
    const nascimento = new Date(form.data_nascimento.value + 'T00:00:00');
    db.collection(COLECAO).add({
        nome: form.nome.value,
        cpf: form.cpf.value,
        rg: form.rg.value,
        telefone_aluno: form.telefone_aluno.value,
        telefone_responsavel: form.telefone_responsavel.value,
        email: form.email.value,
        data_nascimento: firebase.firestore.Timestamp.fromDate(nascimento)
    }).then(()=>{
        form.reset();
    }).catch((erro)=>{
        console.error(erro);
    });
});
function renderAluno(doc){
    const aluno = doc.data();
    const data = aluno.data_nascimento && aluno.data_nascimento.toDate
        ? aluno.data_nascimento.toDate().toLocaleDateString('pt-BR')
        : '-';
    const li = document.createElement('li');
    li.setAttribute('data-id', doc.id);
    const nome = document.createElement('span');
    nome.textContent = aluno.nome;
    const detalhes = document.createElement('span');
    detalhes.textContent = 'CPF: ' + aluno.cpf + ' | RG: ' + aluno.rg +
        ' | Nascimento: ' + data + ' | ' + aluno.email +
        ' | Tel. aluno: ' + aluno.telefone_aluno +
        ' | Tel. responsável: ' + aluno.telefone_responsavel;

    const excluir = document.createElement('div');
    excluir.textContent = 'x';
    excluir.title = 'Excluir aluno';

    excluir.addEventListener('click', ()=>{
        if(confirm('Deseja excluir ' + aluno.nome + '?')){
            db.collection(COLECAO).doc(doc.id).delete();
        }
    });
    li.appendChild(nome);
    li.appendChild(detalhes);
    li.appendChild(excluir);
    lista.appendChild(li);
}
db.collection(COLECAO).orderBy('nome').onSnapshot((snapshot)=>{

    lista.innerHTML = '';
    snapshot.forEach((doc)=> renderAluno(doc));
}, (erro)=>{
    console.error(erro);
});
