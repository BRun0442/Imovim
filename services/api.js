import axios from 'axios';

const api = axios.create({
  baseURL: "https://imovim-api.cyclic.app/",
})

export default api;