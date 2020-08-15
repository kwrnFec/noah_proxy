const express = require("express");
// const axios = require("axios");
const apiUrl = 'http://52.26.193.201:3000/';

let app = express();

app.use(express.static('public'));

app.use(express.json());

const port = 3000;

app.listen(port, () => {
  console.log(`listening on port ${port}`);
});