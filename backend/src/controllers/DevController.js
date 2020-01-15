const axios = require('axios');
const Dev = require('../models/Dev');
const passStringAsArray = require('../utils/PassStringAsArray');

// index, store, show, update, destroy

module.exports = {

  async index(request, response){
    const devs = await Dev.find();

    return response.json(devs);
  },

  async store(request, response) {

    const { gitihub_username, techs, latitude, longitude } = request.body;

    let dev = await Dev.findOne({ gitihub_username });

    if(!dev){
      const apiResponse = await axios.get(`https://api.github.com/users/${gitihub_username}`)
  
      const { name = login, avatar_url, bio } = apiResponse.data;
    
      const techsArray = passStringAsArray(techs);
    
      const location = {
        type: 'Point',
        coordinates: [longitude, latitude],
      }
    
      dev = await Dev.create({
        gitihub_username,
        name,
        avatar_url,
        bio,
        techs: techsArray,
        location,
      })
    }

    return response.json(dev);
  }
};