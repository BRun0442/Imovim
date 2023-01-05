import api from './api';

function CreateUser(nickname, email, password, birthday)
{
  api.post('/user/create-user', 
  {
    nickname: nickname,
    email: email,
    password: password,
    birthday: birthday
  })
  .then(response => {
    alert(response.data.msg);
  })
  .catch(error => {
    alert(error.response.data.msg);
  })   
}

export default CreateUser;