# Chat com Firestore

## Configuração

1. Crie um projeto no Firebase, habilite o Cloud Firestore e gere uma chave de conta de serviço.
2. Configure `GOOGLE_APPLICATION_CREDENTIALS` com o caminho absoluto para o arquivo JSON da chave. Mantenha esse arquivo fora do repositório.
3. O servidor usa o projeto `app-db-aula-cristiano-99bf2` por padrão. Para usar outro projeto, defina `FIREBASE_PROJECT_ID`. A coleção usada é `posts`; para mudar, defina `FIRESTORE_COLLECTION`.
4. Instale as dependências e inicie o servidor:

```sh
npm install
npm run dev
```

O chat fica disponível em `http://localhost:3000`. As credenciais do Firebase são necessárias para iniciar o servidor.
