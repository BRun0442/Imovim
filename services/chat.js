import { firebaseConfig, storage } from "../firebase/config.js";
import { uploadBytes, getDownloadURL, ref, getStorage } from "firebase/storage";
import { initializeApp } from "firebase/app";
import api from './api.js'

export const getMessages = async (chatFocusedId) => {
  const result = await axios.get(`https://imovim-api.cyclic.app/chat/get-messages/${chatFocusedId}`)
  return result.data
}

export const saveMessage = async (messageData) => {
  await axios.post("https://imovim-api.cyclic.app/chat/create-message", messageData)
}

const createGroup = async (image, groupName, groupDescription, user_id, setGroupId) => {
  const data = {
    room_name: groupName, 
    description: groupDescription, 
    photo: image,
    user_id: user_id
  }

  await api.post(`chat/create-group`, data)
  .then((res) => {
    console.log(res.data)
    setGroupId(res.data.room_id)
    console.log(res.data.room_id);
  })
}

export const handleCreateGroup = async (image, groupName, groupDescription, user_id, setGroupId) => {
  if(image)
  {
    let imageRef;
    const storageUrl = `groupImages/${Date.now()}/${Math.random().toString()}`;
    const response = await fetch(image);
    const bytes = await response.blob(); // creates a blob from the uri and pass to firestore
    imageRef = ref(storage, storageUrl);

    uploadBytes(imageRef, bytes)
    .then(() => {
      getDownloadURL(imageRef)
        .then(async (url) => {
          await createGroup(url, groupName, groupDescription, user_id, setGroupId)
          .then(res => console.log(res))
          console.log('url:', url)
          url = ''
          return url
        })
        .catch((err) => {
          console.log(err.message);
        });
    })
    .catch((err) => {
      console.log(err.message);
    });
  }else{
    imageRef = null;
    createGroup('', groupName, groupDescription, user_id, setGroupId)
    return;
  }
}
