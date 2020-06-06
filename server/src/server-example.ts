// GET: Buscar uma ou mais informações do Back-end
// POST: Criar uma nova informação no Back-end
// PUT: Atualizar uma nova informação no Back-end
// DELETE: Remoce uma informação do Back-end

// POST: http://localhost:3333/users = Criar um usuário
// GET: http://localhost:3333/users = Listar usuários
// GET: http://localhost:3333/users/1 = Buscar dados do usuário de posição 1 do array

// Request Param: Parametros que vem na propria rota que identificam um recurso
// Query Param: Parametros que vem na propria rota que geralmente são opcionais para filtros, paginação e etc..
// Request Body: Parametros para criação/atualização de informações

// express.json() é necessario para interpretar o Body da requisição pois por default o EXPRESS não o compreende

// SQL Tradicional: SELECT * FROM users WHERE name = 'Wagner'
// QUERY Builder: utilizando Knex: Knex('users').where('name', 'wagner').select('*')

import express from 'express';

const app = express();

app.use(express.json()); 

const users = [
    'Wagner',
    'Tonhon',
    'Martion',
    'E.T Bilu',
];

app.get('/users', (request, response) => {
    console.log('Listagem de usuários...');

    const search = String(request.query.search);
    const filteredUsers = users.filter(user => user.includes(search));

    return response.json(filteredUsers ? filteredUsers : users);
});

app.get('/users/:id', (request, response) => {
    console.log(`Busca de usuário pelo id: ${request.params.id}`);

    const id = Number(request.params.id);    
    const user = users[id];

    return response.json(user);
});

app.post('/users', (request, response) => {
    console.log('Criação de usuário...');

    const data = request.body;

    const user = {
        name: data.name,
        email:data.email
    }

    return response.json(user);
});

app.listen(3333);