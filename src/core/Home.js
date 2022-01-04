import React, { useState, useEffect } from 'react'
import Card from './Card';
import Navbar from './Navbar/Navbar'
import getVideogames from './apiCore'

const Home = (req, res) => {

    //State
    const [videogames, setVideogames] = useState([]);
    
    // const [error, setError] = useState(false);

    //Api
    const loadVideogames = async () => {

        const data = await getVideogames();

        if ( data ) {
            setVideogames(data.videogames);
        }

        // getVideogames().then(data => {
        //     if (data.error) {
        //         setError(data.error)
        //     } else {
        //         // console.log(typeof(data.videogames));
        //         setVideogames(data.videogames);
        //     }
        // })
    }

    useEffect(() => {
        loadVideogames();
    }, [])

    return (
        <div>
            <Navbar />
            <div className='container'>
                <div className='row'>
                    {videogames.map((videogame, i) => (
                        <div key={i} className="col-lg-4 col-md-6 col-sm-6 col-sm-6">
                            <Card videogame={videogame} />
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}

export default Home
