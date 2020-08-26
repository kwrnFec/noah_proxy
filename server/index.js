const express = require("express");
const axios = require("axios");
const { createProxyMiddleware } = require('http-proxy-middleware');

const port = 3000;

// questions and answers
const qaUrl = 'http://ec2-13-59-64-142.us-east-2.compute.amazonaws.com/';
// ratings and reviews
const rrUrl = 'http://ec2-54-172-55-163.compute-1.amazonaws.com';
// overview
const ovUrl = 'http://ec2-35-165-217-158.us-west-2.compute.amazonaws.com';
// related products
const rpUrl = 'http://ec2-3-16-47-222.us-east-2.compute.amazonaws.com';


let app = express();

app.use(express.static('public'));

app.use('/rp', createProxyMiddleware({ target: rpUrl, changeOrigin: true }));

app.use('/ov', createProxyMiddleware({ target: ovUrl, changeOrigin: true }));

app.use('/qa', createProxyMiddleware({ target: qaUrl, changeOrigin: true }));

app.use('/rrmodule', createProxyMiddleware({ target: rrUrl, changeOrigin: true }));

app.listen(port, () => {
  console.log(`listening on port ${port}`);
});