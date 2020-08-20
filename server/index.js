const express = require("express");
const proxy = require('express-http-proxy');
const cors = require('cors');
const axios = require("axios");
const apiUrl = 'http://52.26.193.201:3000/';
const qaUrl = 'http://ec2-18-224-182-50.us-east-2.compute.amazonaws.com';
// const qaUrl = 'http://localhost:3001';

let app = express();

app.use(express.static('public'));

app.use(express.json());

// should fix CORS
app.use((req, res, next) => {
  res.header('Access-Control-Allow-Origin', '*');
  next();
});

app.get('/qa/*', (req, res) => {
  let url = qaUrl + req.path;
  axios.get(url, { params: req.query })
    .then((response) => {
      res.send(response.data);
    })
    .catch((err) => {
      console.log('ProxyServer: ', err);
    })
});

app.post('/qa/*', (req, res) => {
  let url = qaUrl + req.path;
  axios.post(url, req.body)
    .then((response) => {
      res.send(response.data);
    })
});

app.put('/qa/*', (req, res) => {
  let url = qaUrl + req.path;
  axios.put(url, req.body)
    .then((response) => {
      res.send(response.data);
    })
});

const port = 3000;

app.listen(port, () => {
  console.log(`listening on port ${port}`);
});