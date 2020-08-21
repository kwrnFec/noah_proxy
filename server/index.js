const express = require("express");
const axios = require("axios");
const { createProxyMiddleware } = require('http-proxy-middleware');

const port = 3000;

const qaUrl = 'http://ec2-18-224-182-50.us-east-2.compute.amazonaws.com';
// const qaUrl = 'http://localhost:3001';

let app = express();

app.use(express.static('public'));

app.use('/qa', createProxyMiddleware({ target: qaUrl, changeOrigin: true }));

app.listen(port, () => {
  console.log(`listening on port ${port}`);
});