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

export async function getFriendPosts(user_id) {
  try {
    const res = await api.get(`/post/get-posts-of-friends/${user_id}`)
    return res.data
  } catch (err) {
    console.log(err);
  }
}

export default feedManager;