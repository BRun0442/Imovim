import React, { createContext, useState } from "react";

export const CreateUserContext = createContext({});

function CreateUserProvider({children})
{
  const [nickname, setNickname] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [passwordConfirm, setPasswordConfirm] = useState('');
  const [birthday, setBirthday] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');

  return(
    <CreateUserContext.Provider value={
      {
        nickname, setNickname,
        email, setEmail,
        password, setPassword,
        passwordConfirm, setPasswordConfirm,
        birthday, setBirthday,
        phoneNumber, setPhoneNumber,
        }}
      >
      {children}
    </CreateUserContext.Provider>
  )
}

export default CreateUserProvider;