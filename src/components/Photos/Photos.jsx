import React from 'react';
import { useLoaderData } from 'react-router';
import Photo from '../Photo/Photo';

const Photos = () => {
    const photosData = useLoaderData()
    // console.log(photos)
    return (
        <div>
           {
            photosData.map(singlePhoto=> <Photo key={singlePhoto.id} singlePhoto={singlePhoto} ></Photo>)
           }
        </div>
    );
};

export default Photos;