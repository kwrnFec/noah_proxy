const express = require("express");
const { createProxyMiddleware } = require('http-proxy-middleware');
const cors = require('cors');
const axios = require("axios");
const apiUrl = 'http://52.26.193.201:3000/';
const qaUrl = 'http://ec2-18-224-182-50.us-east-2.compute.amazonaws.com';
// const qaUrl = 'http://localhost:3001';

let app = express();

app.use(express.static('public'));

app.use('/qa', createProxyMiddleware({ target: qaUrl, changeOrigin: true }));

const port = 3000;

app.listen(port, () => {
  console.log(`listening on port ${port}`);
});