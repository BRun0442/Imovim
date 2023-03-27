import React, { createContext, useState } from "react";

export const AuthContext = createContext({});

function AuthProvider({ children }) {
  const [id, setId] = useState();
  const [login, setLogin] = useState(false);
  const [nickname, setNickname] = useState();
  const [profilePicture, setProfilePicture] = useState("");
  const [image, setImage] = useState(null);
  const [anotherUser_id, setAnotherUser_id] = useState(null);
  const [chats, setChats] = useState(null);
  const [reloadChats, setReloadChats] = useState(1);
  const [chatFocusedId, setChatFocusedId] = useState(null);
  const [chatProfileImage, setChatProfileImage] = useState(null);
  const [chatNickname, setChatNickname] = useState(null);
  const [messageList, setMessageList] = useState([]);
  const [changePosts, setChangePosts] = useState(1);

  return (
    <AuthContext.Provider
      value={{
        changePosts,
        setChangePosts,
        messageList,
        setMessageList,
        chatProfileImage,
        setChatProfileImage,
        chatNickname,
        setChatNickname,
        chatFocusedId,
        setChatFocusedId,
        reloadChats,
        setReloadChats,
        chats,
        setChats,
        anotherUser_id,
        setAnotherUser_id,
        login,
        setLogin,
        id,
        setId,
        nickname,
        setNickname,
        profilePicture,
        setProfilePicture,
        image,
        setImage,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
}

export default AuthProvider;
