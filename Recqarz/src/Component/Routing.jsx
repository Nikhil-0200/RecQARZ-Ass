import { Routes, Route } from "react-router-dom";
import Login from "../Page/Login";
import Register from "../Page/Register";
import Dashboard from "../Page/Dashboard";
import Private from "./Private";

const Routing = ({ setIsAuthenticated }) => {
    return (
        <Routes>
            <Route path="/login" element={<Login setIsAuthenticated={setIsAuthenticated} />} />
            <Route path="/register" element={<Register />} />
            <Route 
                path="/dashboard" 
                element={
                    <Private setIsAuthenticated={setIsAuthenticated}>
                        <Dashboard />
                    </Private>
                } 
            />
        </Routes>
    );
}

export default Routing;
