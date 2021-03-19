import axios from 'axios'

const instance = axios.create({
    baseUrl:'localhost:3000/api/v1'
})
 instance.default.headers.common['Authorization'] = 'authorization';

 export default instance;