import React from "react";
import { Header, Footer } from './layout/Header/index'
import { Switch, Route } from "react-router-dom";
import './style.css'

function App () {
    return (
        <>
            <Header />
            <Switch>
                <Route exact path="/">
                    <Pages.Welcome />
                </Route>
                <Route path="/user" >
                        <Pages.About />
                </Route>
            </Switch>
        </>
    )
}

export default App;