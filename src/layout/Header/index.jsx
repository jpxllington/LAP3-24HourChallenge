import React from 'react';
import { Form } from '../../components/Form/index';
import './style.css';

export function Header() {
    return(
        <header>
            <div className="upperHeader">
                <h1>GitHub Repo Tracker</h1>
            </div> 
            <h4 className="enterUser">Enter GitHub username</h4>
           <Form />
        </header>
    )
}

