import api from './api'
import getUserData from './user';

export function logout(setLogin)
{
  setLogin(false);
  alert("Você saiu!");
}


function ValidateData(email, password, setLogin, setId, setAccountData, showToastError, showToastSuccess, saveDataInMemory)
{
  if(email != '' && password != '')
  {
    api.post("/auth/login", {
      email: email, 
      password: password
    })
    .then(async response => {
      console.log(response)
      const id = parseInt(JSON.stringify(response.data.user_id))
      setId(id);
      const user_data = await getUserData(id, setAccountData)

      setLogin(true);

      saveDataInMemory('isUserLoggedIn', 'loggedIn')
      saveDataInMemory('user_id', String(id))
      saveDataInMemory('user_data', String(user_data))
      
      showToastSuccess(response.data.msg, 'teste')
    })
    .catch(error => {
      showToastError(error.response.data.msg, 'teste')
      setLogin(false);
    });
  }else{
    showToastError('Preencha todos os dados!', 'teste')
  }
}

export default ValidateData;