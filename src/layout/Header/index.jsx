import React from 'react';
import './style.css';

export function Header() {
    return(
        <header>
            <h1>GitHub Repo Tracker</h1>
            <h4>Enter GitHub username</h4>
            <Form getResults={getResults}/>
        </header>
    )
}

