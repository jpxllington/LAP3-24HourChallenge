const initState =
{
    result: {
        user: { name: '', login: '', bio: '', avatar_url:'' },
        repos: [],
    },
    error: null
}

export const searchReducer = (state = initState, action) => {
    switch (action.type) {
        case 'LOADING':
            return {...state, error: null}
        case 'LOAD_RESULT':
            return { ...state, result: action.payload}
        case 'SET_ERROR':
            return { ...state, error: action.payload }
        default:
            return state;
    }
}

