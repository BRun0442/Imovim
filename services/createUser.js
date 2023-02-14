import api from './api';

function CreateUser(nickname, email, password, passwordConfirm, birthday, phoneNumber)
{
  console.log({
    nickname: nickname,
    email: email,
    password: password,
    passwordConfirm: passwordConfirm,
    birthday: birthday,
    phoneNumber: phoneNumber
  })
  api.post('/auth/create-user', 
  {
    nickname: nickname,
    email: email,
    password: password,
    passwordConfirm: passwordConfirm,
    birthday: birthday,
    phoneNumber: phoneNumber
  })
  .then(response => {
    alert(JSON.stringify(response.data.msg))
  })
  .catch(error => {
    alert(JSON.stringify(error.response.data.msg))
  })   
}

export default CreateUser;