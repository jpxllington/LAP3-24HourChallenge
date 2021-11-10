import axios from "axios";

export const fetchUser = async(username) => {
    let { data } = await axios.get(`https://api.github.com/users/${username}/repos`)
    return data;
}



const loading = {
    type: 'LOADING',
}

export const loadResult = (userObj, repoArr) => ({
    type: 'LOAD_RESULT',
    payload: {
        user: userObj,
        repos: repoArr
    }
})

export const getResults = async (dispatch, username) => {
    try {
        dispatch(loading)
        const userData = await userRequest(username);
        dispatch(loadResult(userData))
    } catch (err) {
        dispatch({ type: 'SET_ERROR', payload: `oh no! ${err.message}` })
    }
}

// Helpers
const userRequest = async (username) => {
    try {
        const resp = await fetch(`https://api.github.com/users/${username}`)
        const data = await resp.json()

        const filteredData =
        {
            name: data.name,
            login: data.login,
            avatar_url: data.avatar_url
        }
        return filteredData;
    }catch(err){
       throw new Error('error with user request')
    }
}