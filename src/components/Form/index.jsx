import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import './style.css'

export function Form () {

    

    return (
        <form className="userform"aria-label="form" >
            <label htmlFor="username"></label>
            <input className="userInput" id="username" type="text" placeholder='username' autoComplete="false" />
            <input className="userSubmit"type="submit" value="submit" />
        </form>
    )
}
