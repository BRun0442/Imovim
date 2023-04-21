import api from './api';
import { firebaseConfig, storage } from "../firebase/config.js";
import { uploadBytes, getDownloadURL, ref, getStorage } from "firebase/storage";
import { initializeApp } from "firebase/app";

export async function createEvent(user_id, event_name, event_date, event_hour, localization, description, image, setImage) {
  if(image)
  {
    let imageRef;
    const storageUrl = `eventsImage/${Date.now()}/${Math.random().toString()}`;
    const response = await fetch(image);
    const bytes = await response.blob(); // creates a blob from the uri and pass to firestore
    imageRef = ref(storage, storageUrl);

    uploadBytes(imageRef, bytes)
    .then(() => {
      getDownloadURL(imageRef)
        .then(async (url) => {
          await sendDataToApi(user_id, event_name, event_date, event_hour, localization, description, url)  
          .then(res => console.log(res))
          console.log('url:', url)
          url = ''
          setImage(null)
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
    sendDataToApi(user_id, event_name, event_date, event_hour, localization, description, image)
    setImage(null)  
    return;
  }
}

export async function sendDataToApi(user_id, event_name, event_date, event_hour, localization, description, photo)
{
  try {
    const response = await api.post("/event/create-event", {
      user_id: user_id, 
      event_name: event_name, 
      event_date: event_date, 
      event_hour: event_hour, 
      localization: localization, 
      description: description, 
      photo: photo
    })
    
    alert(response.data.msg)
    console.log(response)
  } catch (error) {
    console.log(error.data.msg)
  }
}

export async function getAllEvents(user_id)
{
  try {
    const response = await api.get(`/event/get-all-events/${user_id}`)
    return response.data
  } catch (error) {
    console.log(error.data.msg)
  }
}

export async function getEvent(user_id, event_id)
{
  try {
    const response = await api.get(`/event/get-event/${user_id}/${event_id}`)
    return response.data
  } catch (error) {
    console.log(error.data.msg)
  }
}

export async function getMyEvents(user_id)
{
  try {
    const response = await api.get(`/event/get-user-events/${user_id}`)
    return response.data
  } catch (error) {
    console.log(error.data.msg)
  }
}

export async function getSavedEvents(user_id)
{
  try {
    const response = await api.get(`/event/get-saved-events/${user_id}`)
    return response.data
  } catch (error) {
    console.log(error.data.msg)
  }
}

export async function goToEvent(user_id, event_id) {
  const data = {user_id, event_id}
  try {
    await api.post(`/event/go-to-event/`, data)
  } catch (error) {
    console.log(error.data.msg)
  }
}

export async function saveEvent(user_id, event_id) {
  const data = {user_id, event_id}
  try {
    await api.post(`/event/save-event/`, data)
  } catch (error) {
    console.log(error.data.msg)
  }
}

export default createEvent;