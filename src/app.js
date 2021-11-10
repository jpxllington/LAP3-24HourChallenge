import React from 'react';
import { Header, Footer } from './layout'
import { Switch, Route } from 'react-router-dom';
import * as Pages from './pages'
import './style.css'

function App () {
    return (
        <>
            <Header />
            <Switch>
                <Route exact path="/">
                    <Pages.Welcome />
                </Route>
                <Route path="/user">
                    <Pages.User />
                </Route>
                <Route path="/repo">
                    <Pages.RepoPage />
                </Route>
            </Switch>
            <Footer />
        </>
    )
}

export default App;