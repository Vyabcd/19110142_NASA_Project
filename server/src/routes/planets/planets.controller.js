const {getAllPlanets} = require('../../models/plantets.model');

function httpGetAllPlanets(req, res) {
  return res.status(200).json(getAllPlanets);
}

module.exports = {
  httpGetAllPlanets,
  };