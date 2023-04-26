import api from "./api"

export const sendMail = async (to, subject) => {
    const data = { to, subject }
    const res = await api.post(`/mail/send-email`, data)
    console.log(res.data.code);
    return res.data.code
}