import React from 'react';

const User = ({user}) => {
    // console.log(user)
    const {name,phone,email} = user;
    return (
        <div className='border-2 p-4 rounded-2xl my-3'>
            <h1>{name}</h1>
            <h3>{phone}</h3>
            <p>{email}</p>
        </div>
    );
};

export default User;