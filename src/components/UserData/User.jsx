import React from 'react';
import { Link } from 'react-router';

const User = ({user}) => {
    // console.log(user)
    const {id,name,phone,email} = user;
    return (
        <div className='border-2 p-4 rounded-2xl my-3'>
            <h1>{name}</h1>
            <h3>{phone}</h3>
            <p>{email}</p>
            {/* <button className='border-2 p-2 rounded-2xl'>show details</button> */}
            <Link to={`/user/${id}`}>show details</Link>
        </div>
    );
};

export default User;