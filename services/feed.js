import api from './api';

async function feedManager(ammount)
{
  try {
    const response = await api.get(`/post/get-all-posts/${ammount}`)
    return response.data; 
  } catch (error) {
    console.log(error)
  }
}

export default feedManager;