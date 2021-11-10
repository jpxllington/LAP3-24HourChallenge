import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { Link, useHistory } from 'react-router-dom';
import { fetchUser } from "../../actions"

import './style.css'

export function Form () {

    const dispatch = useDispatch();
    const history = useHistory();

    const handleSubmit = async(e) => {
        e.preventDefault();
        username = e.target.username.value;
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
