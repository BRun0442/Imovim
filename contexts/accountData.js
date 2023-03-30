import React, { createContext, useState, useEffect } from "react";
import * as SecureStore from 'expo-secure-store';
export const AccountDataContext = createContext({});

function CreateAccountDataProvider({children})
{
  const [accountData, setAccountData] = useState();
  const [postFocusedId, setPostFocusedId] = useState();

  async function getUserIsLoggedIn() {
    let result = await SecureStore.getItemAsync('isUserLoggedIn');
    let user_id = await SecureStore.getItemAsync('user_id');
    let user_data = await SecureStore.getItemAsync('user_data');

    if (result == 'loggedIn') {
      setAccountData(JSON.parse(user_data))
      setLogin(true)
    } else {
      // setLogin(false)
      setAccountData(null)
    }
    return result
  }

  useEffect(() => {
    getUserIsLoggedIn()
  }, [accountData])

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