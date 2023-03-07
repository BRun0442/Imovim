import React, { createContext, useState } from "react";

export const AccountDataContext = createContext({});

function CreateAccountDataProvider({children})
{
  const [accountData, setAccountData] = useState();
  const [postFocusedId, setPostFocusedId] = useState();

  return(
    <AccountDataContext.Provider value={
      {
        accountData, setAccountData,
        postFocusedId, setPostFocusedId
      }
    }>
      {children}
    </AccountDataContext.Provider>
  )
}

export default CreateAccountDataProvider;