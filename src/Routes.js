import React from 'react';
import { BrowserRouter as Router , Routes, Route } from 'react-router-dom';

// View Components
import Home from './core/Home';
import Search from './core/Search';

// Functional Components

const RoutesLink = () => {
    return (
        <div className='ContenedorRoutes'>
            <Router>
                <Routes>
                    <Route path="/" exact element = {<Home />} />
                </Routes>
            </Router>
        </div>

    )
}

export default RoutesLink;
