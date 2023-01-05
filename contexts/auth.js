import React, { createContext, useState } from "react";

export const AuthContext = createContext({});

function AuthProvider({children})
{
  const [login, setLogin] = useState(false);

  return(
    <AuthContext.Provider value={{login, setLogin}}>
      {children}
    </AuthContext.Provider>
  )
}

export default AuthProvider;