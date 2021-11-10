import React, { useState } from 'react';
import { useDispatch } from 'react-redux';

import './style.css'

export function Form ({ getResults }) {

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
        <form className="userform"aria-label="form" onSubmit={handleSubmit} >
            <label htmlFor="username"></label>
            <input className="userInput" id="username" type="text" placeholder='username' autoComplete="false" value={username} onChange={updateInput} />
            <input className="userSubmit"type="submit" value="submit" />
        </form>
    )
}
