import React from 'react';
import { useLoaderData } from 'react-router';
const Users2Details = () => {
    const post = useLoaderData()
    console.log(post)
    return (
        <div>
            <h1>{post.title}</h1>
            
        </div>
    );
};

export default Users2Details;