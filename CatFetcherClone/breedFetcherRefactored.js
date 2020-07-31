const request = require('request');


const fetchBreedDescription = function(breedName, callback) {
  request(breedName, callback)
}

module.exports = {fetchBreedDescription}


