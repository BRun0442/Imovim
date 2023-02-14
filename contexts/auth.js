import React, { createContext, useState } from "react";

export const AuthContext = createContext({});

function AuthProvider({children})
{
  const [login, setLogin] = useState(false);
  const [id, setId] = useState();

  return(
    <AuthContext.Provider value={{login, setLogin, id, setId}}>
      {children}
    </AuthContext.Provider>
  )
}

export default AuthProvider;