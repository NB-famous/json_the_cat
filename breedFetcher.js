const request = require('request');
let args = process.argv.slice(2);

//console.log(args[0])

let value = args[0];
let idCode = value.substr(0, 4);



let catType = `https://api.thecatapi.com/v1/images/search?breed_ids=${idCode}`;

request(catType,(err, resp, body) => {

  if (err) {
    console.log(err);
    return;
  }
    
  // use this to parse string to object ///////
  const data = JSON.parse(body);

  //console.log(data);
  //console.log(typeof data);


  if (data.length === 0) {

    return console.log("This cat doesn't exist!!!!!\nAre you even a cat lover?\nPlease Try Again");

  }
    

  console.log(data[0].breeds);
    
});




//Note: JavaScript object, we need to convert the string version of it into an object
//Note:  this is called deserialization and we can do this by "parsing" the string.


// use JSON.parse to convert the JSON string into an actual object.
// Use this inside the call back function

