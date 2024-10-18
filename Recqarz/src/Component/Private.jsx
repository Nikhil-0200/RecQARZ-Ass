import { Navigate } from "react-router-dom";

const Private = ({ children }) => {
    const isAuthenticated = localStorage.getItem("isAuthenticated") === "true";

    if (!isAuthenticated) {
        return <Navigate to="/login" />;
    }

    return children;
};

export default Private;
