import api from './api'

export function logout(setLogin)
{
  setLogin(false);
  alert("Você saiu!");
}

function ValidateData(email, password, setLogin, setId)
{
  api.get("/auth/login", {
    params: { email: email, password: password},
  })
  .then(response => {
    alert(JSON.stringify(response.data.msg))
    console.log(typeof(parseInt(JSON.stringify(response.data.user_id))))
    setId(parseInt(JSON.stringify(response.data.user_id)));
    setLogin(true);
    // console.log("id: ", JSON.stringify(response.data.user_id))
    
    //o setId nao ta pegando, é problema no context nao no parametro
  })
  .catch(error => {
    alert(JSON.stringify(error.response.data.msg))
    setLogin(false);
  });
}

export default ValidateData;