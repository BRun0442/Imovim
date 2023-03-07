

import React, { createContext, useState } from "react";

export const AuthContext = createContext({});

function AuthProvider({children})
{
  const [login, setLogin] = useState(false);
  const [id, setId] = useState();
  const [nickname, setNickname] = useState();
  const [profilePicture, setProfilePicture] = useState('');
  const [image, setImage] = useState(null);
  return(
    <AuthContext.Provider value={{login, setLogin, id, setId, nickname, setNickname, profilePicture, setProfilePicture, image, setImage}}>
      {children}
    </AuthContext.Provider>
  )
}

export default AuthProvider;