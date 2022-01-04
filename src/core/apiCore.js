import { API } from '../config';

const getVideogames = async () => {

    const response = await fetch( `${API}/videojuegos/videogames` , {
        method: 'GET'
    });

    return await response.json()

    // return fetch( `${process.env.REACT_APP_API_URL}/videojuegos/videogames` , {
    //     method: 'GET'
    // })a
    // .then( response => {
    //     // console.log(response);
    //     return response.json()
    // })
    // .catch( err => console.log(err) )
}

export default getVideogames;
