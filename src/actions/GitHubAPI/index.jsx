import axios from "axios";

export const fetchUser = (username) => {
    let { data } = await axios.get(`https://api.github.com/users/${username}/repos`)
    return data;
}
