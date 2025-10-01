import React from 'react';
import { Link, useNavigate } from 'react-router';

const User2Single = ({single}) => {
    let navaget = useNavigate()
    // console.log(single)
    const {id}= single
    return (
        <div className='border-2 my-5 text-black '>
            <p>{single.title}</p>
            <h6 className='text-sm'>{single.body}</h6>
            <Link to={`/post/${id}`}>show all</Link>  
            <button onClick={()=>navaget('/users')}>Go back</button>
           
        </div>
    );
};

export default User2Single;