const request = require('request');
const cat = process.argv.slice(2);
const query = cat.slice(0,3);
const url = 'https://api.thecatapi.com/v1/breeds/search?q=' + query;

request(url, (error, response, body) => {
  console.log('error:', error); // Print the error if one occurred
  //console.log('statusCode:', response && response.statusCode); // Print the response status code if a response was received
  //console.log('body:', body); // Print the HTML for the Google homepage.
  //console.log(typeof(body))
  const data = JSON.parse(body);
  //console.log(data);
  console.log(typeof data);
  if (Object.keys(data).length === 0) {
    console.log("Cat not found!");
  } else console.log(data[0].description);

});

