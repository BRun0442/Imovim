import axios from "axios";

const getSports = async () => {
    const results = await axios.get('https://imovim-api.cyclic.app/sports/get-sports')
    return results.data
}

const getSportsPracticed = async (id) => {
    const results = await axios.get(`https://imovim-api.cyclic.app/sports/get-sports-practiced/${id}`)
    let data = results.data
    data = await data.map((i) => {
        return i.sport_name
    })
    console.log(data)
    return data
}

const insertSportPracticed = async (user_id, sport_id) => {
    const data = { user_id: user_id, sport_id: sport_id }
    await axios.post('https://imovim-api.cyclic.app/sports/insert', data)
}

export { getSports, getSportsPracticed, insertSportPracticed }