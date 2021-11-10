import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import './style.css'

export function Form ({getResults}) {

    const [username, setUsername] = useState('');
    const dispatch = useDispatch();

    function updateInput(e) {
        setUsername(e.target.value);
    }

    async function handleSubmit(e) {
        try {
            e.preventDefault();
            await getResults(dispatch, username);
            document.location = '/user'
        }catch(err){
            console.log(err)
        }
        setUsername('');
    }

    return (
        <form aria-label="form" onSubmit={handleSubmit}>
            <label htmlFor="username"></label>
            <input id="username" type="text" placeholder='username' value={username} onChange={updateInput} />
            <input type="submit" value="submit" />
        </form>
    )
}
