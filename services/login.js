import api from './api'
import getUserData from './user';

export function logout(setLogin)
{
  setLogin(false);
  alert("Você saiu!");
}


function ValidateData(email, password, setLogin, setId, setAccountData)
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
      
      alert(response.data.msg)
    })
    .catch(error => {
      alert(error.response.data.msg)
      setLogin(false);
    });
  }else{
    alert('Preencha todos os dados!')
  }
}

export default ValidateData;