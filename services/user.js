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

export default getUserData;