import axios from "axios";

export const fetchUser = async(username) => {
    let { data } = await axios.get(`https://api.github.com/users/${username}/repos`)
    return data;
}
