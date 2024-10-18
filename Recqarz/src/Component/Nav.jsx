import { Link } from "react-router-dom";

const Nav = () =>{
    return(
        <div className="bg-[#F8F8F8] text-black h-[80px] w-full flex justify-center items-center gap-5">
            <Link className="text-red-400 text-2xl font-bold" to="/dashboard">
                Dash<span className="text-black">board</span>
            </Link>

            <div>
                
            </div>

            <Link to="/register">
            Register
            </Link>

            <Link to="/login">
                Login
            </Link>  
        </div>
    )
}
export default Nav;