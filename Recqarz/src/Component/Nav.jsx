import { useState } from "react";
import { Link } from "react-router-dom";
import { FaSearch, FaBars, FaTimes } from "react-icons/fa";

const Nav = () => {
    const [isOpen, setIsOpen] = useState(false); // State to manage sidebar visibility

    const toggleSidebar = () => {
        setIsOpen(!isOpen);
    };

    return (
        <>
            <div className="hidden lg:flex bg-[#F8F8F8] text-black h-[80px] w-full justify-around items-center gap-5">
                <Link className="text-red-400 text-2xl font-bold" to="/dashboard">
                    Dash<span className="text-black">board</span>
                </Link>

                <div className="bg-white shadow-md rounded-md w-[40%] flex pl-3 justify-between items-center">
                    <input type="text" placeholder="Search your task here..." className="w-full" />
                    <span className="bg-red-400 w-[30px] h-[30px] flex justify-center items-center rounded-lg">
                        <FaSearch />
                    </span>
                </div>

                <Link className="px-2 py-2 bg-red-400 rounded-lg" to="/register">
                    Register
                </Link>

                <Link className="px-2 py-2 bg-red-400 rounded-lg" to="/login">
                    Login
                </Link>
            </div>

            <div className="lg:hidden flex items-center justify-between bg-[#F8F8F8] h-[80px] px-4">
                <Link className="text-red-400 text-2xl font-bold" to="/dashboard">
                    Dash<span className="text-black">board</span>
                </Link>
                <button onClick={toggleSidebar}>
                    <FaBars className="text-black text-2xl" />
                </button>
            </div>

            {isOpen && (
                <div className="fixed inset-0 bg-gray-800 bg-opacity-75 z-50 lg:hidden">
                    <div className="bg-white w-3/4 max-w-md h-full shadow-lg">
                        <div className="flex justify-between items-center p-4">
                            <h2 className="text-red-400 text-2xl font-bold">Menu</h2>
                            <button onClick={toggleSidebar}>
                                <FaTimes className="text-black text-2xl" />
                            </button>
                        </div>
                        <div className="flex flex-col p-4">
                            <Link to="/dashboard" className="py-2">Dashboard</Link>
                            <Link to="/register" className="py-2">Register</Link>
                            <Link to="/login" className="py-2">Login</Link>
                        </div>
                    </div>
                </div>
            )}
        </>
    );
};

export default Nav;
