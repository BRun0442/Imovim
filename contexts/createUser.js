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

  const [postId, setPostId] = useState();

  return(
    <CreateUserContext.Provider value={
      {
        nickname, 
        email, 
        password, 
        passwordConfirm, 
        birthday,
        phoneNumber,
        setNickname,
        setEmail,
        setPassword,
        setPasswordConfirm,
        setBirthday,
        setPhoneNumber,
        postId, 
        setPostId
        }}
      >
      {children}
    </CreateUserContext.Provider>
  )
}

export default CreateUserProvider;