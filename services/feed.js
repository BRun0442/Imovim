import api from './api';

async function feedManager(ammount, id)
{
  try {
    const response = await api.post(`/post/get-all-posts`, { postAmmount: ammount, user_id: parseInt(id) })
    console.log(response.data)
    return response.data; 
  } catch (error) {
    console.log(error)
    console.log('errooooooooooooooooooooooooooooooooooooooooo')
  }
}

export default feedManager;