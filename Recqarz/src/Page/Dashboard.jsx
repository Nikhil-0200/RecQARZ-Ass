import { Button } from "@chakra-ui/react";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

const Dashboard = ({ setIsAuthenticated }) => {
  const navigate = useNavigate();

  useEffect(() => {
    const isAuthenticated = localStorage.getItem("isAuthenticated");
    if (!isAuthenticated) {
      window.location.href = "/login"; 
    }
  }, []);

  const handleLogout = () => {
    localStorage.removeItem("isAuthenticated");
    navigate("/login");
  };

  return (
    <div>
      <h1>This is the Dashboard Page.</h1>
      <Button
        width="100px"
        bgColor="#FF9090"
        color="white"
        onClick={handleLogout}
      >
        Logout
      </Button>
    </div>
  );
};

export default Dashboard;
