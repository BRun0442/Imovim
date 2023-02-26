import api from './api';

async function createEvent(user_id, event_name, event_date, event_hour, localization, description, photo)
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
  } catch (error) {
    console.log(error.data.msg)
  }
}

export async function getEvent()
{
  try {
    const response = await api.get("/event/create-event")
    alert(response.data.msg)

    return response.data.msg
  } catch (error) {
    console.log(error.data.msg)
  }
}



export default createEvent;