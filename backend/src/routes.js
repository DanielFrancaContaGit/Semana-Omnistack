const { Router } = require('express');
const DevController = require('./controllers/DevController');

const SearchController = require('./controllers/SearchController');

const routes = Router();

//Metodos http: GET, POST, PUT, DELETE

//Tipos de paramentros:

//Query params: { GET }  request.query (Filtros, Ordenação, Paginação, ....)
//Route params: { DELETE, PUT } request.params (Identificar um recurso na alteração ou remoção )
//Body:  { POST, PUT } request.body (São dados para a alteração ou criação de um registro)

routes.get('/devs', DevController.index);
routes.post('/devs', DevController.store);

routes.get('/search',SearchController.index);

module.exports = routes; 