const initState =
{
    result: {
        user: { name: '', login: '', bio: '', avatar_url:'' },
        repos: [],
    },
    error: null
}

let userData = localStorage.getItem('userData');

export const searchReducer = (state = initState, action) => {
    switch (action.type) {
        case 'LOADING':
            return {...state, error: null}
        case 'LOAD_RESULT':
            return { ...state, result: action.payload}
        case 'SET_ERROR':
            return { ...state, error: action.payload }
        case "SET_USER":
            console.log(typeof action.payload);
            localStorage.setItem("userData", JSON.stringify(action.payload))
            return { ...state, result: action.payload}
        default:
            let userData = localStorage.getItem('userData');
            return { ...state, result: JSON.parse(userData) }

    }
}

