import React from 'react';
import Home from './core/Home';
import { BrowserRoute , Switch , Route } from 'react-router-dom'

const Routes = () => {
    return(
        <BrowserRoute>
            <Switch>
                <Route path="/" exact component= {Home} />
            </Switch>
        </BrowserRoute>
    )
}

export default Routes;
