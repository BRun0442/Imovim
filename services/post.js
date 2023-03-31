import api from './api';
import React,{ useContext } from 'react';

export async function createPost(user_id, caption, image)
{
  try {
    const response = await api.post('/post/create-post', {
      user_id: user_id,
      caption: caption,
      image: image
    })

    alert(response.data.msg)
  } catch (error) {
    alert(error)
  }
}

async function likePost(user_id, post_id)
{
  try {
    const response = await api.post("/post/like-post", {
      post_id: post_id,
      user_id: user_id
    })
  } catch (error) {
    console.log(error)
  }
}

export default likePost;