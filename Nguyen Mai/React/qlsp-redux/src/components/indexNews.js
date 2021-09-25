import axios from 'axios';
//mock API
let API_URL = 'https://jsonplaceholder.typicode.com/posts';
   export default function callApiNews( method = 'GET', body) {
       return axios({
           method,
           url: `${API_URL}`,
           data: body
       }).catch(err => {
           console.log(err);
       });
}

