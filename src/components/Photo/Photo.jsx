import React from 'react';
import { Link } from 'react-router';

const Photo = ({singlePhoto}) => {
    // console.log(singlePhoto)
    const {id,body,title} = singlePhoto;
    return (
        <div className='border-2 p-2 my-10'>
            {/* <h2>{singlePhoto.title}</h2> */}
            <p>{body}</p>
            <p>{title}</p>
            <Link to={`/show/${id}`}>show</Link>
        </div>
    );
};

export default Photo;