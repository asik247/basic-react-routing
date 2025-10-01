import React from 'react';
import { useLoaderData } from 'react-router';

const PhotoDetail = () => {
    const details = useLoaderData()
    // console.log(details)
    return (
        <div>
            <h1>{details.body}</h1>
        </div>
    );
};

export default PhotoDetail;