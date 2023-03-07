import React, { createContext, useState } from "react";

export const AccountDataContext = createContext({});

function CreateAccountDataProvider({children})
{
  const [accountData, setAccountData] = useState();
  // const [nickname, setNickname] = useState();
  // const [profilePicture, setProfilePicture] = useState();
  // const [profileBackground, setProfileBackground] = useState();
  // const [description, setDescription] = useState();
  // const [localization, setLocalization] = useState();
  // const [phoneNumber, setPhoneNumber] = useState();
  // const [birthday, setBirthday] = useState();

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