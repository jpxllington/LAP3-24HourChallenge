import React from 'react';
import { Header, Footer } from './layout'
import { Switch, Route } from 'react-router-dom';
import { Welcome, User } from './pages'
import './style.css'

function App () {
    return (
        <>
            <Header />
            <Switch>
                <Route exact path="/">
                    <Welcome />
                </Route>
                <Route exact path="/user">
                    <User />
                </Route>
            </Switch>
            <Footer />
        </>
    )
}

export default App;