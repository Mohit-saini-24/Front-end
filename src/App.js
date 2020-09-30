import React from 'react';

import Home from './Home'
import Login from './components/authComponents/Login'

import { BrowserRouter, Route, Switch } from 'react-router-dom';

const App = () => {
    return (
        <BrowserRouter>
            <div>
                <Switch>
                    <Route path="/" exact component={Home} />
                    <Route path="/login" exact component={Login} />
                </Switch>
            </div>
        </BrowserRouter>
    )
}
export default App