import React from 'react'
import Navbar from './Navbar/Navbar'

const Home = ( req , res ) => {
    return (
        <div>
            <Navbar/>
            <h2>This is the Home page</h2>
        </div>
    )
}

export default Home
