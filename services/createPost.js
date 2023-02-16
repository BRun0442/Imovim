import React, { useState } from "react";
import { View, Text, TextInput, Image, Button } from "react-native";
import { db, auth, firebaseConfig, storage } from "../firebase/config.js";
import { uploadBytes, getDownloadURL, ref, getStorage } from "firebase/storage";
import { initializeApp } from "firebase/app";
import axios from "axios";
initializeApp(firebaseConfig);
import { createPost } from "./post.js";
export default async function CreatePost(image, user_id, caption) {
  const storageUrl = `posts/${Date.now()}/${Math.random().toString()}`;
  console.log(image);
  const response = await fetch(image);
  const bytes = await response.blob(); // creates a blob from the uri and pass to firestore
  const imageRef = ref(storage, storageUrl);
  uploadBytes(imageRef, bytes)
    .then(() => {
      getDownloadURL(imageRef)
        .then(async (url) => {
          await createPost(user_id, caption, url)  
          .then(res => console.log(res))
          return url
        })
        .catch((err) => {
          console.log(err.message);
        });
    })
    .catch((err) => {
      console.log(err.message);
    });
}
