import api from "./api";

export const getSolicitations = async (user_id) => {
    const result = await api.get(`/friendShip/get-solicitations/${user_id}`)
    return result.data
}

export const getPostNotifications = async (user_id) => {
    const result = await api.get(`/post/get-post-notifications/${user_id}`)
    return result.data
}