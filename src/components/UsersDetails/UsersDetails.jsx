import React from 'react';
import { useLoaderData } from 'react-router';

const UsersDetails = () => {
    const userDetail = useLoaderData()
    // console.log(userDetail.name)
    return (
        <div>
            <h1>boss ami users ar details bolci..</h1>
            <h1>{userDetail.website}</h1>
            <h1>{userDetail.name}</h1>
        </div>
    );
};

export default UsersDetails;