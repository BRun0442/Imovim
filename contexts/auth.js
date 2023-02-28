

import React, { createContext, useState } from "react";

export const AuthContext = createContext({});

function AuthProvider({children})
{
  const [login, setLogin] = useState(false);
  const [id, setId] = useState();
  const [nickname, setNickname] = useState();
  const [profilePicture, setProfilePicture] = useState('https://pbs.twimg.com/profile_images/1561105702541824000/lwOHrYLO_400x400.jpg');

  return(
    <AuthContext.Provider value={{login, setLogin, id, setId, nickname, setNickname, profilePicture, setProfilePicture}}>
      {children}
    </AuthContext.Provider>
  )
}

export default AuthProvider;