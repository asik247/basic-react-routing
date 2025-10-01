import React from 'react';
import { Link } from 'react-router';

const User2Single = ({single}) => {
    // console.log(single)
    const {id}= single
    return (
        <div className='border-2 my-5 text-black '>
            <p>{single.title}</p>
            <h6 className='text-sm'>{single.body}</h6>
            <Link to={`/post/${id}`}>show all</Link>  
           
        </div>
    );
};

export default User2Single;