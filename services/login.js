import api from './api'

export function logout(setLogin)
{
  setLogin(false);
  alert("Você saiu!");
}

function ValidateData(email, password, setLogin)
{
  api.get("/auth/login", {
    params: { email: email, password: password},
  })
  .then(response => {
    alert(JSON.stringify(response.data.msg))
    setLogin(true);
  })
  .catch(error => {
    alert(JSON.stringify(error.response.data.msg))
    setLogin(false);
  });
}

export default ValidateData;