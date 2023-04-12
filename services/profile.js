import { firebaseConfig, storage } from "../firebase/config.js";
import { uploadBytes, getDownloadURL, ref, getStorage } from "firebase/storage";
import { initializeApp } from "firebase/app";
import axios from "axios";

initializeApp(firebaseConfig);

export const sendProfileDataToApi = async (user_id, image, background, localization, nickname, navigation) => {
    const data = {
        user_id: user_id, 
        image: image, 
        background: background, 
        localization: localization,
        nickname: nickname
    }
    try{
      await axios.post(`https://imovim-api.cyclic.app/profile/update-profile`, data)
      .then((res) => {
          console.log(res)
          alert(res.data.msg)
          navigation.navigate("Meu Perfil")
      })
    } catch (err) {
      alert(err.response.data.msg)
    }
}

export const updateBackgroundInApi = async (user_id, background) => {
    const data = {
        user_id: user_id,
        background: background
    }
    await axios.post(`https://imovim-api.cyclic.app/profile/update-profile-background`, data)
    .then((res) => {
        console.log(res)
    })
}

export const updateBackground = async (user_id, background) => {
  if(background)
  {
    let imageRef;
    const storageUrl = `backgroundImage/${Date.now()}/${Math.random().toString()}`;
    const response = await fetch(background);
    const bytes = await response.blob(); // creates a blob from the uri and pass to firestore
    imageRef = ref(storage, storageUrl);

    uploadBytes(imageRef, bytes)
    .then(() => {
      getDownloadURL(imageRef)
        .then(async (url) => {

        /// code goes here
          await updateBackgroundInApi(user_id, url)  
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
    updateBackgroundInApi(user_id, '')  
    return;
  }
}

export const updateProfile = async (image, user_id, background, localization, setProfilePicture, nickname, navigation) => {
    if(image)
  {
    let imageRef;
    const storageUrl = `profileImage/${Date.now()}/${Math.random().toString()}`;
    const response = await fetch(image);
    const bytes = await response.blob(); // creates a blob from the uri and pass to firestore
    imageRef = ref(storage, storageUrl);

    uploadBytes(imageRef, bytes)
    .then(() => {
      getDownloadURL(imageRef)
        .then(async (url) => {
        setProfilePicture(url)
          await sendProfileDataToApi(user_id, url, background, localization, nickname, navigation)  
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
    sendProfileDataToApi(user_id, '', background, localization, nickname, navigation)  
    return;
  }
  if (background) {
    await updateBackground(user_id, background)
  }
}