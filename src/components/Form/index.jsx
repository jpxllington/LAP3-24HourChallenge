import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { Link, useHistory } from 'react-router-dom';
import { fetchUser } from "../../actions"

import './style.css'

export function Form ({ getResults }) {

    const [username, setUsername] = useState('');


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


    const dispatch = useDispatch();
    const history = useHistory();

    const handleSubmit = async(e) => {
        e.preventDefault();
        let username = e.target.username.value;
        let repoData = await fetchUser(username);
        dispatch({type:"SET_USER", payload:repoData});
        document.location = '/user'
    }

    return (
        <form className="userform"aria-label="form" onSubmit={(e)=>handleSubmit(e)}>
            <label htmlFor="username"></label>
            <input className="userInput" id="username" type="text" placeholder='username' autoComplete="false" />
            <input className="userSubmit"type="submit" value="Submit"/>
        </form>
    )
}