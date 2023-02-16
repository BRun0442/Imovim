import axios from "axios"
import UploadImage from "./createPost"
export default async function createPost(user_id, imageUrl, caption) {
    const data = {
        user_id: user_id,
        image: imageUrl,
        caption: caption
    }
    await axios.post('https://odd-pink-cobra-shoe.cyclic.app/post/create-post', data)
    .then(res => console.log(res))
}