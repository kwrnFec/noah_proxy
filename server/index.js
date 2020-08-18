const express = require("express");
const proxy = require('express-http-proxy');
const axios = require("axios");
const apiUrl = 'http://52.26.193.201:3000/';

let app = express();

app.use(express.static('public'));

// app.use(express.urlencoded({ extended: true }));

app.use(express.json());

// should fix CORS
app.use((req, res, next) => {
  res.header('Access-Control-Allow-Origin', '*');
  next();
});

app.get('/*', (req, res) => {
  // will replace localhost:3001 during deployment
  // slice removes /qa
  let url = 'http://localhost:3001' + req.path;
  axios.get(url, { params: req.query })
    .then((response) => {
      res.send(response.data);
    })
});

app.post('/*', (req, res) => {
  console.log(req.body)
  // will replace localhost:3001 during deployment
  // slice removes /qa
  let url = 'http://localhost:3001' + req.path;
  axios.post(url, req.body)
    .then((response) => {
      res.send(response.data);
    })
});

app.put('/*', (req, res) => {
  console.log(req.body)
  // will replace localhost:3001 during deployment
  // slice removes /qa
  let url = 'http://localhost:3001' + req.path;
  axios.put(url, req.body)
    .then((response) => {
      res.send(response.data);
    })
});

const port = 3000;

app.listen(port, () => {
  console.log(`listening on port ${port}`);
});