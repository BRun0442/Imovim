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