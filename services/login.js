import api from './api'

export function logout(setLogin)
{
  setLogin(false);
  alert("Você saiu!");
}

function ValidateData(email, password, setLogin, setId)
{
  if(email != '' && password != '')
  {
    api.get("/auth/login", {
      params: { email: email, password: password},
    })
    .then(response => {
      alert(JSON.stringify(response.data.msg))
      setId(parseInt(JSON.stringify(response.data.user_id)));
      setLogin(true);
    })
    .catch(error => {
      alert(JSON.stringify(error.response.data.msg))
      setLogin(false);
    });
  }else{
    alert('Preencha todos os dados!')
  }
}

export default ValidateData;