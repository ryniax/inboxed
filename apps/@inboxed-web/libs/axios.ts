import axios from 'axios'

export default{
axios : axios.create({
    baseUrl:'localhost:3000/api/v1'
})
}

 