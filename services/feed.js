import api from './api';

async function feedManager()
{
  try {
    const response = await api.get("/post/get-all-posts")
    return response.data; 
  } catch (error) {
    console.log(error)
  }
}

export default feedManager;