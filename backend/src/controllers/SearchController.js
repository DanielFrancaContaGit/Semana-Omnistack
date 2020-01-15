const Dev = require('../models/Dev');
const passStringAsArray = require('../utils/PassStringAsArray');

module.exports = {
  async index(request, response){

    //Buscar todos os devs em um raio de 10 km
    //filtrar tecnologias

    const { latitude, longitude, techs } = request.query;

    const techsAsArray = passStringAsArray(techs);

    const devs = await Dev.find({
      techs: {
        $in: techsAsArray,
      },
      location: {
        $near: {
          $geometry: {
            type: 'Point',
            coordinates: [longitude, latitude],
          },
          $maxDistance: 10000,
        },
      },
    });

    return response.json({ devs });
  }
}