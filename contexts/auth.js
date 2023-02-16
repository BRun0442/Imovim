import React, { createContext, useState } from "react";

export const AuthContext = createContext({});

function AuthProvider({children})
{
  const [login, setLogin] = useState(false);
  const [id, setId] = useState();
  const [nickname, setNickname] = useState();
  const [profilePicture, setProfilePicture] = useState('https://randomuser.me/api/portraits/thumb/men/57.jpg');

  return(
    <AuthContext.Provider value={{login, setLogin, id, setId, nickname, setNickname, profilePicture, setProfilePicture}}>
      {children}
    </AuthContext.Provider>
  )
}

export default AuthProvider;