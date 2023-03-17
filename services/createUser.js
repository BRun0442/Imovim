import api from './api';

function CreateUser(nickname, email, password, passwordConfirm, birthday, phoneNumber, goToLoginScreen)
{
    if(password.length >= 7)
    {
      // const birthdayYear = new Date(birthday).getFullYear()
      // const currentYear = new Date().getFullYear()
      // if (birthdayYear > currentYear) {
      //   alert('Ano inválido!')
      // }
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
          console.log(response.data.msg)
          alert(response.data.msg)
          goToLoginScreen()
        })
        .catch(error => {
          console.log(error.response.data.msg)
          console.log(nickname, email, password, passwordConfirm, birthday, phoneNumber)
          alert(error.response.data.msg)
        })  
      }else{
        alert('As senhas não coincidem!')
      }
    }else{
      alert('A senha deve conter 8 ou mais digitos!')
    } 
}

export default CreateUser;