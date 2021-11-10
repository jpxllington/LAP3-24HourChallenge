import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { Link, useHistory } from 'react-router-dom';
import { fetchUser } from "../../actions"

import './style.css'

export function Form ({ getResults }) {

    const [username, setUsername] = useState('');
    const dispatch = useDispatch();

    function updateInput(e) {
        setUsername(e.target.value);
    }

   async function handleSubmitUser(e) {
        try {
            e.preventDefault();
            await getResults(dispatch, username);
            document.location = '/user'
        }catch(err){
            console.log(err)
        }
        setUsername('');
    }

    const history = useHistory();

    const handleSubmit = async(e) => {
        e.preventDefault();
        username = e.target.username.value;
        console.log(username);
        let repoData = await fetchUser(username);
        console.log(repoData);
        dispatch({type:"SET_USER", payload:repoData});
        history.push('/repo')
    }

    return (
        <form className="userform"aria-label="form" onSubmit={(e)=>handleSubmit(e)}>
            <label htmlFor="username"></label>
            <input className="userInput" id="username" type="text" placeholder='username' autoComplete="false" />
            <input className="userSubmit"type="submit" value="Submit"/>
        </form>
    )
}
