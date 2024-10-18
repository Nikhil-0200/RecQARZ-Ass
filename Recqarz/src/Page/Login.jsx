import { Link, useNavigate } from "react-router-dom";
import { LoginImg } from "../../Images";
import { Button } from "@chakra-ui/react";
import { FaFacebookSquare } from "react-icons/fa";
import { FcGoogle } from "react-icons/fc";
import { BsTwitterX } from "react-icons/bs";
import { useState } from "react";
import axios from "axios";

const Login = () => {
  const navigate = useNavigate();
  const [data, setData] = useState({
    email: "",
    password: "",
    errorMessage: "",
  });

  function handleChange(e) {
    let { name, value } = e.target;
    setData({ ...data, [name]: value, errorMessage: "" });
  }

  async function handleSubmit(e) {
    e.preventDefault();

    if (!data.email || !data.password) {
      setData({
        ...data,
        errorMessage: "Please enter both email and password.",
      });
      return;
    }

    try {
      const response = await axios.get("http://localhost:3001/users");
      const users = response.data;

      console.log("Fetched users:", users);

      const user = users.find(
        (user) => user.email === data.email && user.password === data.password
      );

      console.log("Logged-in user:", user);

      if (user) {
        alert("Login successful!");
        localStorage.setItem("isAuthenticated", "true");
        navigate("/dashboard");
      } else {
        setData({ ...data, errorMessage: "Invalid email or password." });
      }
    } catch (error) {
      console.error("Error logging in:", error.message); 
      setData({ ...data, errorMessage: "Error logging in. Please try again." });
    }
  }

  return (
    <section className="w-full bg-[#FF6767] h-[90vh] p-16">
      <div className="bg-white w-full h-full flex flex-row-reverse justify-between px-10 py-5">
        <div className="w-[40%]">
          <img
            className="w-full h-full object-center"
            src={LoginImg}
            alt="LoginImg"
          />
        </div>

        <div className="w-1/2">
          <h1 className="text-black text-2xl font-bold">Sign In</h1>
          <div className="flex flex-col gap-3 pt-3">
            <input
              className="border-[1.5px] border-solid border-gray-400 px-2 py-2 rounded-sm text-xs"
              type="email"
              placeholder="Enter Email"
              name="email"
              value={data.email}
              onChange={handleChange}
            />
            <input
              className="border-[1.5px] border-solid border-gray-400 px-2 py-2 rounded-sm text-xs"
              type="password"
              placeholder="Enter Password"
              name="password"
              value={data.password}
              onChange={handleChange}
            />
            <div className="flex flex-col gap-4 pt-2">
              <div className="flex gap-3">
                <input type="checkbox" />
                <p className="text-xs font-bold">Remember Me</p>
              </div>
              <Button
                width="100px"
                bgColor="#FF9090"
                color="white"
                onClick={handleSubmit}
              >
                Login
              </Button>
            </div>

            {data.errorMessage && (
              <p className="text-red-500">{data.errorMessage}</p>
            )}

            <div className="text-xs font-semibold mt-10 flex flex-col gap-3">
              <div className="flex gap-3">
                <p>Or, Login with </p>
                <div className="flex gap-2">
                  <FaFacebookSquare size={20} />
                  <FcGoogle size={20} />
                  <BsTwitterX size={20} />
                </div>
              </div>
              <p>
                Don't have an account?{" "}
                <Link to="/register" className="text-blue-700">
                  Create One
                </Link>
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Login;
