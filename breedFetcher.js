const request = require('request');

const fetchBreedDescription = function(cat, callback) {
  const query = cat.slice(0,3);
  const url = 'https://api.thecatapi.com/v1/breeds/search?q=' + query;
  request(url, (error, response, body) => {
    const data = JSON.parse(body);
    let desc = "";
    if (Object.keys(data).length === 0 || error !== null || data[0].name !== cat) {
      error = "Cat not found!";
    } else desc = data[0].description;
    callback(error, desc);

  });
};

module.exports = {fetchBreedDescription};

