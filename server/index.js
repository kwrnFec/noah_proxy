const express = require("express");
const axios = require("axios");
const apiUrl = 'http://52.26.193.201:3000/';

let app = express();

app.use(express.static('public'));

app.use(express.json());

// should fix CORS
app.use((req, res, next) => {
  res.header('Access-Control-Allow-Origin', '*');
  next();
});

app.get('/qaModule', (req, res) => {
  // request url temporary, will change after deployment
  axios.get('http://localhost:3001/')
    .then((response) => {
      res.send(response.data);
    })
})

const port = 3000;

app.listen(port, () => {
  console.log(`listening on port ${port}`);
});