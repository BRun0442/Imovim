import { firebaseConfig, storage } from "../firebase/config.js";
import { uploadBytes, getDownloadURL, ref, getStorage } from "firebase/storage";
import { initializeApp } from "firebase/app";
import { createPost } from "./post.js";

initializeApp(firebaseConfig);

export default async function CreatePost(image, user_id, caption) {
  console.log('teste'); 
  if(image)
  {
    let imageRef;
    const storageUrl = `posts/${Date.now()}/${Math.random().toString()}`;
    const response = await fetch(image);
    const bytes = await response.blob(); // creates a blob from the uri and pass to firestore
    imageRef = ref(storage, storageUrl);

    uploadBytes(imageRef, bytes)
    .then(() => {
      getDownloadURL(imageRef)
        .then(async (url) => {
          await createPost(user_id, caption, url)  
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
    createPost(user_id, caption, '')  
    return;
  }
}
