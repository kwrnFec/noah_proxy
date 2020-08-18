import axios from 'axios';

console.log('working');

axios.get('/qaModule')
  .then((res) => {
    // have to figure out a way to run modules bundle.js file
    // after getting them from the response
    console.log('index.jsx: ');
    console.log(res.data);

    // let newScript = document.createElement("script");
    // let body = document.getElementsByTagName('body');
    // newScript.src = ;
    // target.appendChild(newScript);
  })
