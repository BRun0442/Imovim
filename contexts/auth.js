

import React, { createContext, useState } from "react";

export const AuthContext = createContext({});

function AuthProvider({children})
{
  const [id, setId] = useState();
  const [login, setLogin] = useState(false);
  const [nickname, setNickname] = useState();
  const [profilePicture, setProfilePicture] = useState('');
  const [image, setImage] = useState(null);
  const [anotherUser_id, setAnotherUser_id] = useState(null)

  return(
    <AuthContext.Provider value={{anotherUser_id, setAnotherUser_id, login, setLogin, id, setId, nickname, setNickname, profilePicture, setProfilePicture, image, setImage}}>
      {children}
    </AuthContext.Provider>
  )
}

export default AuthProvider;