import React from 'react';
import { useLoaderData } from 'react-router';

const Users = () => {
    const users = useLoaderData()
    console.log(users)
    return (
        <div>
            <h1>hi iam a users data</h1>
        </div>
    );
};

export default Users;