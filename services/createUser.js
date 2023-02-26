import api from './api';

function CreateUser(nickname, email, password, passwordConfirm, birthday, phoneNumber)
{
  if(
    nickname != '' && 
    birthday != '' && 
    phoneNumber != '' && 
    email != '' && 
    password != '' && 
    passwordConfirm != ''
  )
  {
    if(password.length >= 7)
    {
      if(passwordConfirm == password)
      {
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
      }else{
        alert('As senhas não coincidem!')
      }
    }else{
      alert('A senha deve conter 8 ou mais digitos!')
    }
  }else
  {
    alert('Preencha todos os dados!')
  }  
}

export default CreateUser;