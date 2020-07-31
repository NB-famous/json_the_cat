const request = require('request');

// let breedName = 'Siberian';

const fetchBreedDescription = (breedName, callback) => {

  let idCode = breedName.substr(0, 4);
  let url = `https://api.thecatapi.com/v1/images/search?breed_ids=${idCode}`;

  request(url, (err, response, body) => {

    if (err) {
    console.log('Error fetch details:', err);
    callback(err, null);
    return;
    }

    const data = JSON.parse(body);

    if (data.length === 0) {
    return "This cat doesn't exist!!!!!\nAre you even a cat lover?\nPlease Try Again"
    }
    desc = data[0].breeds[0].description;


    callback(err, desc);



  });

}

module.exports = {fetchBreedDescription}


