import React from 'react';
import Home from '../HomeFolder/Home';
import { Outlet } from 'react-router';

const Root = () => {
    return (
        <div>
            <h1>I am root</h1>
            {/* <a href="about">about</a>
            <a href="login">Login</a> */}
            {/* <Home></Home> */}
            <div className='border-2 p-5 rounded-2xl'>
                <a className='m-5' href="/">Root</a>

                <a className='m-5' href="about">About</a>

                <a className='m-5' href="login">Login</a>

                <a className='m-5' href="submit">Submit</a>
                <a className='m-5' href="add">Add</a>
                <a className='m-5' href="register">Register</a>
            </div>
            <Outlet></Outlet>
        </div>
    );
};

export default Root;