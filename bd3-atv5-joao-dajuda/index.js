const express = require('express');
const ejs = require('ejs');
const http = require('http');
const path = require('path');
const { Server } = require('socket.io');
const { applicationDefault, initializeApp } = require('firebase-admin/app');
const { getFirestore } = require('firebase-admin/firestore');

const app = express();
const server = http.createServer(app);
const io = new Server(server);

const firebaseOptions = {
    credential: applicationDefault(),
    projectId: process.env.FIREBASE_PROJECT_ID || 'app-db-aula-cristiano-99bf2',
};

const firebaseApp = initializeApp(firebaseOptions);
const firestore = getFirestore(firebaseApp);
const posts = firestore.collection(process.env.FIRESTORE_COLLECTION || 'posts');

const publicDirectory = path.join(__dirname, 'public');
app.engine('html', ejs.renderFile);
app.set('view engine', 'html');
app.set('views', publicDirectory);
app.use(express.static(publicDirectory, { index: false }));

app.get('/', (req, res) => {
    res.render('index.html');
});

function serializePost(document) {
    const data = document.data();
    const createdAt = data.createdAt;

    return {
        ...data,
        id: document.id,
        createdAt: createdAt?.toDate?.().toISOString() ?? createdAt ?? null,
    };
}

io.on('connection', (socket) => {
    socket.on('previousMessage', async () => {
        try {
            const snapshot = await posts.get();
            const messages = snapshot.docs
                .map(serializePost)
                .sort((a, b) => String(a.createdAt ?? '').localeCompare(String(b.createdAt ?? '')));

            socket.emit('previousMessage', messages);
        } catch (error) {
            console.error('Não foi possível carregar as mensagens do Firestore:', error);
            socket.emit('messageError', 'Não foi possível carregar as mensagens.');
        }
    });

    socket.on('sendMessage', async (data, acknowledge) => {
        const author = typeof data?.author === 'string' ? data.author.trim() : '';
        const message = typeof data?.message === 'string' ? data.message.trim() : '';

        if (!author || !message) {
            if (typeof acknowledge === 'function') {
                acknowledge({ ok: false, error: 'Informe seu nome e uma mensagem.' });
            }
            return;
        }

        const now = new Date();
        const post = {
            author,
            message,
            data_hora: now.toLocaleString('pt-BR'),
            createdAt: now.toISOString(),
        };

        try {
            const document = await posts.add(post);
            io.emit('receivedMessage', { id: document.id, ...post });

            if (typeof acknowledge === 'function') {
                acknowledge({ ok: true });
            }
        } catch (error) {
            console.error('Não foi possível salvar a mensagem no Firestore:', error);
            if (typeof acknowledge === 'function') {
                acknowledge({ ok: false, error: 'Não foi possível enviar a mensagem.' });
            }
        }
    });
});

async function startServer() {
    await posts.limit(1).get();

    const port = Number(process.env.PORT || 3000);
    server.listen(port, () => {
        console.log(`Aplicação de chat rodando em http://localhost:${port}`);
    });
}

startServer().catch((error) => {
    console.error('Não foi possível iniciar o servidor ou conectar ao Firestore:', error);
    process.exitCode = 1;
});
