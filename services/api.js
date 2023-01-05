import axios from 'axios';

const instance = axios.create({
  baseURL: "https://odd-pink-cobra-shoe.cyclic.app",
})

export default instance;