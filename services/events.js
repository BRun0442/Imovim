import api from "./api";
import { firebaseConfig, storage } from "../firebase/config.js";
import { uploadBytes, getDownloadURL, ref, getStorage } from "firebase/storage";
import { initializeApp } from "firebase/app";

export async function createEvent(
  user_id,
  event_name,
  event_date,
  event_hour,
  localization,
  description,
  image,
  setImage,
  marker,
  updatingEvent,
  eventId
) {
  if (image) {
    let imageRef;
    const storageUrl = `eventsImage/${Date.now()}/${Math.random().toString()}`;
    const response = await fetch(image);
    const bytes = await response.blob(); // creates a blob from the uri and pass to firestore
    imageRef = ref(storage, storageUrl);

    uploadBytes(imageRef, bytes)
      .then(() => {
        getDownloadURL(imageRef)
          .then(async (url) => {
            if (!updatingEvent) {
              await sendDataToApi(
                user_id,
                event_name,
                event_date,
                event_hour,
                localization,
                description,
                url,
                marker
              ).then((res) => console.log(res));
              console.log("url:", url);
              url = "";
              setImage(null);
              return url;  
            } else {
              await updateEvent(
                user_id,
                eventId,
                event_name,
                event_date,
                event_hour,
                localization,
                description,
                url,
                marker
              ).then((res) => console.log(res));
              console.log("url:", url);
              url = "";
              setImage(null);
              return url;  
            }
          })
          .catch((err) => {
            console.log(err.message);
          });
      })
      .catch((err) => {
        console.log(err.message);
      });
  } else {
    imageRef = null;
    if (!updatingEvent) {
      sendDataToApi(
        user_id,
        event_name,
        event_date,
        event_hour,
        localization,
        description,
        image,
        marker
      )
    } else {
      updateEvent(
        user_id,
        eventId,
        event_name,
        event_date,
        event_hour,
        localization,
        description,
        url,
        marker
      )
    }
    setImage(null);
    return;
  }
}

export async function sendDataToApi(
  user_id,
  event_name,
  event_date,
  event_hour,
  localization,
  description,
  photo,
  marker
) {
  try {
    const response = await api.post("/event/create-event", {
      user_id: user_id,
      event_name: event_name,
      event_date: event_date,
      event_hour: event_hour,
      localization: localization,
      description: description,
      photo: photo,
      marker: marker,
    });

    alert(response.data.msg);
    console.log(response);
  } catch (error) {
    console.log(error.data.msg);
  }
}

export async function getAllEvents(user_id) {
  try {
    const response = await api.get(`/event/get-all-events/${user_id}`);
    return response.data;
  } catch (error) {
    console.log(error.data.msg);
  }
}

export async function getFriendEvents(user_id) {
  try {
    const response = await api.get(`/event/get-friend-events/${user_id}`);
    return response.data;
  } catch (error) {
    console.log(error.data.msg);
  }
}

export async function removeEvent(event_id, user_id) {
  try {
    const { data } = await api.delete(`/event/delete-event/${event_id}/${user_id}`);
    console.log(data.msg);
    return data.msg;
  } catch (error) {
    console.log(error.data.msg);
    return error.data.msg;
  }
}

export async function getEvent(user_id, event_id) {
  try {
    const response = await api.get(`/event/get-event/${user_id}/${event_id}`);
    return response.data;
  } catch (error) {
    console.log(error.data.msg);
  }
}

export async function getUsersWhoGo(event_id) {
  try {
    const response = await api.get(`/event/get-users-who-go/${event_id}`);
    return response.data;
  } catch (error) {
    console.log(error.data.msg);
  }
}

export async function updateEvent(
  user_id,
  event_id,
  event_name,
  event_date,
  event_hour,
  localization,
  description,
  photo,
  marker) {
  try {
    const response = await api.put("/event/update-event", {
      user_id: user_id,
      event_id: event_id,
      event_name: event_name,
      event_date: event_date,
      event_hour: event_hour,
      localization: localization,
      description: description,
      photo: photo,
      marker: marker,
    });

    alert(response.data.msg);
    console.log(response);
  } catch (error) {
    console.log(error.data.msg);
  }
}

export async function getMyEvents(user_id) {
  try {
    const response = await api.get(`/event/get-user-events/${user_id}`);
    return response.data;
  } catch (error) {
    console.log(error.data.msg);
  }
}

export async function getSavedEvents(user_id) {
  try {
    const response = await api.get(`/event/get-saved-events/${user_id}`);
    return response.data;
  } catch (error) {
    console.log(error.data.msg);
  }
}

export async function goToEvent(user_id, event_id) {
  const data = { user_id, event_id };
  try {
    await api.post(`/event/go-to-event/`, data);
  } catch (error) {
    console.log(error.data.msg);
  }
}

export async function saveEvent(user_id, event_id) {
  const data = { user_id, event_id };
  try {
    await api.post(`/event/save-event/`, data);
  } catch (error) {
    console.log(error.data.msg);
  }
}

export default createEvent;
