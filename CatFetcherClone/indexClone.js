const { fetchBreedDescription } = require('./breedFetcher');
/* let args = process.argv.slice(2);
let value = args[0];
let idCode = value.substr(0, 4); */

//let breedName = `https://api.thecatapi.com/v1/images/search?breed_ids=${idCode}`;

fetchBreedDescription(breedName, (error, desc) => {
    if (error) {
      console.log('Error fetch details:', error);
    } else {
      console.log(desc);
    }
});

