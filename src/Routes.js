import React from 'react';
import { BrowserRouter as Router , Routes, Route } from 'react-router-dom';
import './App.css';

// View Components
import Home from './core/Home';
import Search from './core/Search';
// import Search from './core/Search';

// Functional Components

const RoutesLink = () => {
    return (
        <div className='ContenedorRoutes'>
            <Router>
                <Routes>
                    <Route path="/" exact element = {<Home />} />
                    <Route path="/search" exact element = { <Search/> } />
                </Routes>
            </Router>
        </div>

    )
}

export default RoutesLink;
