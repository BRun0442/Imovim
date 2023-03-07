import React, { createContext, useState } from "react";

export const AccountDataContext = createContext({});

function CreateAccountDataProvider({children})
{
  const [accountData, setAccountData] = useState();

  return(
    <AccountDataContext.Provider value={
      {
        accountData, setAccountData
      }
    }>
      {children}
    </AccountDataContext.Provider>
  )
}

export default CreateAccountDataProvider;