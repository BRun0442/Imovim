import api from './api';

async function likePost(user_id, post_id)
{
  try {
    const response = await api.post("/post/like-post", {
      post_id: post_id,
      user_id: user_id
    })
    // console.log(response.data)
    alert(response.data.msg); 
  } catch (error) {
    console.log(error)
  }
}

export default likePost;