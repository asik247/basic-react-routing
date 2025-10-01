import React from 'react';
import { useLoaderData } from 'react-router';
import User2Single from '../Users2Single/User2Single';

const Users2 = () => {
    const user2 = useLoaderData()
    console.log(user2)
    return (
        <div>
            <h1>Hello i am User 2</h1>
            {
                user2.map(single=> <User2Single key={single.id} single={single}></User2Single>)
            }
           
        </div>
    );
};

export default Users2;