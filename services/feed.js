import api from './api';

async function feedManager()
{
  try {
    const response = await api.get("/post/get-all-posts")
    // console.log(response.data)
    return response.data; 
  } catch (error) {
    console.log(error)
  }
}

export default feedManager;