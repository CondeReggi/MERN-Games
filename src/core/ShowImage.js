import React from 'react'
import './ShowImage.css'
import { API } from '../config';

const ShowImage = ({ item , url }) => {

    console.log("entre a imagen" , item , url)

    return (
        <div className='product-img'>
            <img
                src={ `${API}/${url}/foto/${ item._id }` }
                alt={ item.nombre }
                className='mb-3 img-cont'
                style={{ maxHeight: "600px", maxWidth: "300px" }}
            />
        </div>
    )
}

export default ShowImage
