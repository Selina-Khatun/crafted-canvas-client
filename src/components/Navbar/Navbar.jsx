
import { NavLink } from 'react-router-dom';

const Navbar = () => {
    return (
        <div className='sticky top-0 z-50 mx-4  '>
            <div className="navbar  bg-transparent hover:relative hover:bg-white  hover:scale-105  transition duration-1000 ease-in  absolute">
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
                    <NavLink className={({ isActive }) =>
                        isActive ? " text-[#e59149] font-extrabold   px-4 rounded-lg py-2 mr-5   underline" : "font-bold mr-4 text-[#dfa674] hover:text-[#e59149] hover:scale-110  transition-all"
                    } to={'/login'}>login</NavLink>
                    <NavLink className={({ isActive }) =>
                        isActive ? "  text-[#e59149] font-extrabold  px-4 rounded-lg py-2 mr-5  underline" : "font-bold mr-4 text-[#dfa674] hover:text-[#e59149] hover:scale-110  transition-all"
                    } to={'/register'}>register</NavLink>
                </div>
            </div>
        </div>
    );
};

export default Navbar;