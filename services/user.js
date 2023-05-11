import api from './api';

export async function getUserData(id, setAccountData)
{
  try {
    const response = await api.get(`/profile/get-profile-data/${id}`)
    setAccountData(response.data)
    return response.data
  } catch (error) {
    console.log(error)
  }
}

export async function getAnotherUserData(id, userSeeingId)
{
  try {
    const response = await api.post(`/profile/get-profile-data`, {user_id: id, userSeeingId: userSeeingId})
    return response.data
  } catch (error) {
    console.log(error)
  }
}

export async function getAllUsers(user_id) {
  try{
    const users = await api.get(`/user/search-user/${user_id}`)
    return users.data
  } catch (error) {
    console.log(error)
  }
}

export default getUserData;