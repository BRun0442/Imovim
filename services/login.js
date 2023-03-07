import api from './api'
import getUserData from './user';

export function logout(setLogin)
{
  setLogin(false);
  alert("Você saiu!");
}


function ValidateData(email, password, setLogin, setId, setAccountData, accountData)
{
  if(email != '' && password != '')
  {
    api.post("/auth/login", {
      email: email, 
      password: password
    })
    .then(response => {
      const id = parseInt(JSON.stringify(response.data.user_id))
      alert(JSON.stringify(response.data.msg))

      setId(id);
      getUserData(id, setAccountData, accountData)

      setLogin(true);
    })
    .catch(error => {
      alert(error);
      setLogin(false);
    });
  }else{
    alert('Preencha todos os dados!')
  }
}

export default ValidateData;