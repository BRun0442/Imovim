export const getMessages = async (chatFocusedId) => {
  const result = await axios.get(`https://imovim-api.cyclic.app/chat/get-messages/${chatFocusedId}`)
  return result.data
}

export const saveMessage = async (messageData) => {
  await axios.post("https://imovim-api.cyclic.app/chat/create-message", messageData)
}