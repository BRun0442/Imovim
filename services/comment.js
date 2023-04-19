import axios from "axios"

export const getComments = async (postId, setComments) => {
    await axios.get(`https://imovim-api.cyclic.app/comment/get-comments-of-post/${postId}`)
      .then((res) => {
        setComments(res.data)
      })
  }

export const sendComment = async (commentText, id, postId, setCommentText, setComments) => {
    const data = {
      "comment": commentText,
      "user_id": id,
      "post_id": postId
    }
    await axios.post(`https://imovim-api.cyclic.app/comment/create-comment`, data)
    .then(async (res) => {
      await getComments(postId, setComments)
      setCommentText('')
    })
  }

export const updateComment = async (comment, user_id, comment_id) => {
  const data = {
    comment, 
    user_id, 
    comment_id
  }

  await axios.post(`https://imovim-api.cyclic.app/comment/update-comment`, data)
  .then((res) => console.log(res))
}

export const deleteComment = async (comment_id, user_id) => {
  await axios.delete(`https://imovim-api.cyclic.app/comment/delete-comment?id=${comment_id}&user=${user_id}`)
  .then((res) => console.log(res))
}