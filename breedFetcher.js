const request = require("request");
const breeds = process.argv.slice(2);

const URL = `https://api.thecatapi.com/v1/breeds/search?q=${breeds}`;

const fetchBreedDescription = function(breedName, callback) {
  const URL = `https://api.thecatapi.com/v1/breeds/search?q=${breedName}`;
  request(URL, (error, response, body) =>{
    const data = JSON.parse(body);
    let desc = "";

    if (data.length === 0) {
      desc = "The requested breed is not found.";
      return;
    }
  
    desc = data[0]["description"];
    callback(error, desc);
    done();
  });
};

module.exports = { fetchBreedDescription };