const { Router } = require('express');
const axios = require('axios');
const Dev = require('./models/Dev')

const routes = Router();

//Metodos http: GET, POST, PUT, DELETE

//Tipos de paramentros:

//Query params: { GET }  request.query (Filtros, Ordenação, Paginação, ....)
//Route params: { DELETE, PUT } request.params (Identificar um recurso na alteração ou remoção )
//Body:  { POST, PUT } request.body (São dados para a alteração ou criação de um registro)

routes.post('/devs', async (request, response) => {

  const { gitihub_username, techs } = request.body;

  const apiResponse = await axios.get(`https://api.github.com/users/${gitihub_username}`)

  const { name = login, avatar_url, bio } = apiResponse.data;

  const techsArray = techs.split(',').map(tech => tech.trim());

  const dev = await Dev.create({
    gitihub_username,
    name,
    avatar_url,
    bio,
    techs: techsArray
  })

  return response.json(dev);
});

module.exports = routes;