import React from 'react';
import './style.css';

function Header() {
    return(
        <header>
            <h1>GitHub Repo Tracker</h1>
            <h4>Enter GitHub username</h4>
            <Form getResults={getResults}/>
        </header>
    )
}

export default Header;