import api from './api'

export function logout(setLogin)
{
  setLogin(false);
  alert("Você saiu!");
}

function ValidateData(email, password, setLogin, setId, setNickname, setImage)
{
  if(email != '' && password != '')
  {
    api.post("/auth/login", { email: email, password: password})
    .then(response => {
      alert(JSON.stringify(response.data.msg))
      setId(parseInt(JSON.stringify(response.data.user_id)));
      setNickname(response.data.nickname)
      // setImage(response.data.image)
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