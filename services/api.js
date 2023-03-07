import axios from 'axios';

const instance = axios.create({
  baseURL: "https://imovim-api.cyclic.app/",
})

export default instance;