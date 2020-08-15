import axios from 'axios';

console.log('working');

axios.get('/qaModule')
.then((res)=> {
  console.log(res);
})
