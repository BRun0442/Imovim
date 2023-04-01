export const getMessages = async (chatFocusedId) => {
  await axios.get(`https://imovim-api.cyclic.app/chat/get-messages/${chatFocusedId}`)
  .then((res) => {
    return res.data
  })
}

export const saveMessage = async (messageData) => {
  await axios.post("https://imovim-api.cyclic.app/chat/create-message", messageData)
}