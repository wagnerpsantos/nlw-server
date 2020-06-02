import express from 'express';

const app = express();

app.get('/users', (request, response) => {
    console.log('Listagem de usuários...');

    response.json([
        'Wagner',
        'Tonho',
        'Martin',
        'E.T Bilu',
    ]);
});

app.listen(3333);