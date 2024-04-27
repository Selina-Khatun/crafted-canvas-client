import React from 'react';
import { NavLink } from 'react-router-dom';

const Navbar = () => {
    return (
        <div>
            <div className="navbar bg-base-100">
                <div className="navbar-start">
                    <div className="dropdown">
                        <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                        </div>
                        <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                            <NavLink to={'/'}> Home</NavLink>
                           
                        </ul>
                    </div>
                    <a className="btn btn-ghost text-xl">daisyUI</a>
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal px-1">
                        <NavLink className={({ isActive }) =>
                            isActive ? " text-cyan-100 border-2 bg-cyan-800 px-4 rounded-lg py-2 mr-5  border-cyan-700 underline" : "font-bold mr-4 text-cyan-800"
                        } to={'/'}>Home</NavLink>
                        <NavLink className={({ isActive }) =>
                            isActive ? " text-cyan-100 border-2 bg-cyan-800 px-4 rounded-lg py-2 mr-5  border-cyan-700 underline" : "font-bold mr-4 text-cyan-800"
                        } to={'/login'}>login</NavLink>
                        <NavLink className={({ isActive }) =>
                            isActive ? " text-cyan-100 border-2 bg-cyan-800 px-4 rounded-lg py-2 mr-5  border-cyan-700 underline" : "font-bold mr-4 text-cyan-800"
                        } to={'/register'}>register</NavLink>
                        <NavLink className={({ isActive }) =>
                            isActive ? " text-cyan-100 border-2 bg-cyan-800 px-4 rounded-lg py-2 mr-5  border-cyan-700 underline" : "font-bold mr-4 text-cyan-800"
                        } to={'/myCraft'}>myCraft</NavLink>
                        <NavLink className={({ isActive }) =>
                            isActive ? " text-cyan-100 border-2 bg-cyan-800 px-4 rounded-lg py-2 mr-5  border-cyan-700 underline" : "font-bold mr-4 text-cyan-800"
                        } to={'/allCraft'}>allCraft</NavLink>
                        <NavLink className={({ isActive }) =>
                            isActive ? " text-cyan-100 border-2 bg-cyan-800 px-4 rounded-lg py-2 mr-5  border-cyan-700 underline" : "font-bold mr-4 text-cyan-800"
                        } to={'/addCraft'}>addCraft</NavLink>
                       
                    </ul>
                </div>
                <div className="navbar-end">
                    <a className="btn">Button</a>
                </div>
            </div>
        </div>
    );
};

export default Navbar;