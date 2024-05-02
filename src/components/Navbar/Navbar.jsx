
import { useContext } from 'react';
import { NavLink } from 'react-router-dom';
import { AuthContext } from '../../FirebaseProvider/FirebaseProvider';
import ToggleBtn from '../ToggleBtn/ToggleBtn';
import { useTheme } from '../../ThemeProvider/ThemeProvider';

const Navbar = () => {
    const { logout, user } = useContext(AuthContext);
    const { theme } = useTheme();
    return (
        <div className={`sticky top-0 z-50 rounded-2xl mx-4  ${theme === 'dark' ? 'bg-black' : 'bg-white'} `}>

            <div className={`navbar   rounded-2xl ${theme === 'dark' ? 'bg-black' : 'bg-white'} transition duration-1000 ease-in  `}>
                <div className="navbar-start">
                    <div className="dropdown">
                        <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                        </div>
                        <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                            <NavLink className={({ isActive }) =>
                                isActive ? " text-[#e59149] font-extrabold   px-4 rounded-lg py-2 mr-5   underline" : "font-bold mr-4 text-[#dfa674] hover:text-[#e59149] hover:scale-110  transition-all "
                            } to={'/'}>Home</NavLink>

                            <NavLink className={({ isActive }) =>
                                isActive ? " text-[#e59149] font-extrabold    px-4 rounded-lg py-2 mr-5   underline" : "font-bold mr-4 text-[#dfa674] hover:text-[#e59149] hover:scale-110  transition-all"
                            } to={'/myCraft'}>My Art&Craft List</NavLink>
                            <NavLink className={({ isActive }) =>
                                isActive ? " text-[#e59149] font-extrabold  px-4 rounded-lg py-2 mr-5   underline" : "font-bold mr-4 text-[#dfa674] hover:text-[#e59149] hover:scale-110  transition-all"
                            } to={'/allCraft'}>All Art & craft Items</NavLink>
                            <NavLink className={({ isActive }) =>
                                isActive ? " text-[#e59149] font-extrabold  px-4 rounded-lg py-2 mr-5   underline" : "font-bold mr-4 text-[#dfa674] hover:text-[#e59149] hover:scale-110  transition-all"
                            } to={'/addCraft'}>Add Craft Item</NavLink>
                        </ul>
                    </div>
                    <div className='flex items-center'>

                        <img className='w-[40%]' src="https://i.ibb.co/2YpTwZG/download-removebg-preview-2.png" alt="" />
                    </div>

                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal items-center px-1">
                        <NavLink className={({ isActive }) =>
                            isActive ? " text-[#e59149] font-extrabold   px-4 rounded-lg py-2 mr-5   underline" : "font-bold mr-4 text-[#dfa674] hover:text-[#e59149] hover:scale-110  transition-all "
                        } to={'/'}>Home</NavLink>

                        <NavLink className={({ isActive }) =>
                            isActive ? " text-[#e59149] font-extrabold    px-4 rounded-lg py-2 mr-5   underline" : "font-bold mr-4 text-[#dfa674] hover:text-[#e59149] hover:scale-110  transition-all"
                        } to={'/myCraft'}>My Art&Craft List</NavLink>
                        <NavLink className={({ isActive }) =>
                            isActive ? " text-[#e59149] font-extrabold  px-4 rounded-lg py-2 mr-5   underline" : "font-bold mr-4 text-[#dfa674] hover:text-[#e59149] hover:scale-110  transition-all"
                        } to={'/allCraft'}>All Art & craft Items</NavLink>
                        <NavLink className={({ isActive }) =>
                            isActive ? " text-[#e59149] font-extrabold  px-4 rounded-lg py-2 mr-5   underline" : "font-bold mr-4 text-[#dfa674] hover:text-[#e59149] hover:scale-110  transition-all"
                        } to={'/addCraft'}>Add Craft Item</NavLink>

                    </ul>
                </div>
                <div className="navbar-end">


                    <ToggleBtn />
                    {
                        user?.email ? <div className="group relative cursor-pointer py-2">

                            <div className={`flex items-center justify-between space-x-5 ${theme === 'dark' ? 'bg-black' : 'bg-white'}`} >
                                <a className="menu-hover my-2 py-2 text-base font-medium text-black lg:mx-4" >

                                    <div tabIndex={0} role="button" className="btn btn-ghost btn-circle avatar border border-zinc-400">
                                        <div className="w-10 rounded-full">
                                            <img alt={user?.displayName} src={user?.photoURL
                                            } />
                                        </div>
                                    </div>
                                </a>

                            </div>

                            <div
                                className="invisible  rounded-3xl absolute z-50 flex  right-0 flex-col bg-gray-100 py-1 px-4 text-gray-800 shadow-xl group-hover:visible">

                                <p className="my-2 block border-b border-gray-100 py-1 font-semibold text-gray-500 hover:text-black md:mx-2">
                                    {user?.displayName}
                                </p>

                                <p className="my-2 block border-b border-gray-100 py-1 font-semibold text-gray-500 hover:text-black md:mx-2">
                                    {user?.email}
                                </p>
                                <button onClick={logout} className="my-2 block border-b border-gray-100 py-1 font-semibold text-gray-500 hover:text-black md:mx-2 btn bg-gradient-to-r from-[#e59149] to-[#dfa674] shadow-lg  hover:bg-cyan-600 ">
                                    Sign Out
                                </button>

                            </div>
                        </div>
                            :
                            <div>
                                <NavLink className={({ isActive }) =>
                                    isActive ? " text-[#e59149] font-extrabold   px-4 rounded-lg py-2 mr-5   underline" : "font-bold mr-4 text-[#dfa674] hover:text-[#e59149] hover:scale-110  transition-all"
                                } to={'/login'}>Login</NavLink>
                                <NavLink className={({ isActive }) =>
                                    isActive ? "  text-[#e59149] font-extrabold  px-4 rounded-lg py-2 mr-5  underline" : "font-bold mr-4 text-[#dfa674] hover:text-[#e59149] hover:scale-110  transition-all"
                                } to={'/register'}>Register</NavLink>
                            </div>
                    }


                </div>
            </div>

        </div>
    );
};

export default Navbar;