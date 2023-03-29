import api from './api'
import getUserData from './user';

export function logout(setLogin)
{
  setLogin(false);
  alert("Você saiu!");
}


function ValidateData(email, password, setLogin, setId, setAccountData, showToastError, showToastSuccess)
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
      await getUserData(id, setAccountData)

      setLogin(true);
      
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