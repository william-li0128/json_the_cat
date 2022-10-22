const request = require("request");
const breeds = process.argv.slice(2);

const URL = `https://api.thecatapi.com/v1/breeds/search?q=${breeds}`;
request(URL, (error, response, body) => {

  if (error) {
    console.log(error);
    return;
  }

  const data = JSON.parse(body);

  if (data.length === 0) {
    console.log("The requested breed is not found.");
    return;
  }

  console.log(data[0]["description"]);
});