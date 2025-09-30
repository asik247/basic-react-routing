import React from 'react';
import Home from '../HomeFolder/Home';
import { NavLink, Outlet } from 'react-router';
import "../AncorStyle/Ancor.css"

const Root = () => {
    return (
        <div>
            <h1>I am root</h1>
            {/* <a href="about">about</a>
            <a href="login">Login</a> */}
            {/* <Home></Home> */}
            <div className='border-2 p-5 rounded-2xl'>
                <nav>
                <NavLink className='m-5' to="/">Root</NavLink>

                <NavLink className='m-5' to="about">About</NavLink>

                <NavLink className='m-5' to="login">Login</NavLink>

                <NavLink className='m-5' to="submit">Submit</NavLink>
                <NavLink className='m-5' to="add">Add</NavLink>
                <NavLink className='m-5' to="register">Register</NavLink>
                <NavLink className='m-5' to="users">Users</NavLink>
                <NavLink className='m-5' to="users2">Users2</NavLink>
                <NavLink className='m-5' to="user/1">UsersDetails</NavLink>
                </nav>
            </div>
            <Outlet></Outlet>
        </div>
    );
};

export default Root;