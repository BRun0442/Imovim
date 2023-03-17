import api from './api';

async function getUserData(id, setAccountData)
{
  try {
    const response = await api.get(`/profile/get-profile-data/${id}`)
    setAccountData(response.data)
  } catch (error) {
    console.log(error)
  }
}

export async function getAnotherUserData(id)
{
  try {
    const response = await api.get(`/profile/get-profile-data/${id}`)
    return response.data
  } catch (error) {
    console.log(error)
  }
}

export async function getAllUsers() {
  try{
    const users = await api.get('/user/search-user')
    return users.data
  } catch (error) {
    console.log(error)
  }
}

export default getUserData;