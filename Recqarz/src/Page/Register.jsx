import { Link, useNavigate } from "react-router-dom";
import { RegisterImg } from "../../Images";
import { Button } from "@chakra-ui/react";
import { useState } from "react";
import axios from "axios";

const Register = () => {
    const navigate = useNavigate(); // Initialize useNavigate
    const [data, setData] = useState({
        email: "",
        password: "",
        errorMessage: "",
        successMessage: "",
    });

    function handleChange(e) {
        let { name, value } = e.target;
        setData({ ...data, [name]: value, errorMessage: "" }); // Clear error message on input change
    }

    async function registerRequest() {
        try {
            // Fetch existing users from db.json
            const response = await axios.get("http://localhost:3001/users");
            const users = response.data;

            // Check if the email already exists
            const userExists = users.find(user => user.email === data.email);

            if (userExists) {
                setData({ ...data, errorMessage: "Email already exists." });
                alert("Email already exists.");
                return; // Stop the registration process
            }

            // If email doesn't exist, proceed to register the user
            const newUser = {
                id: users.length + 1, // Simple way to assign an ID
                email: data.email,
                password: data.password,
            };

            await axios.post("http://localhost:3001/users", newUser);

            // Reset form and show success message
            setData({ email: "", password: "", errorMessage: "", successMessage: "Registration successful!" });
            alert("Registration successful!");
            navigate("/login"); // Redirect to login page after successful registration
        } catch (error) {
            console.error("Error during registration:", error);
            setData({ ...data, errorMessage: "Error during registration. Please try again." });
        }
    }

    function handleSubmit(e) {
        e.preventDefault();
        registerRequest();
    }

    return (
        <section className="w-full bg-[#FF6767] h-[90vh] p-16">
            <div className="bg-white w-full h-full flex flex-row justify-between px-10 py-5">
                <div className="w-[30%]">
                    <img
                        className="w-full h-full object-center"
                        src={RegisterImg}
                        alt="RegisterImg"
                    />
                </div>

                <div className="w-1/2">
                    <h1 className="text-black text-2xl font-bold">Sign Up</h1>
                    <div action="" className="flex flex-col gap-3 pt-3">
                        <input
                            className="border-[1.5px] border-solid border-gray-400 px-2 py-2 rounded-sm text-xs"
                            type="text"
                            placeholder="Enter First Name"
                        />
                        <input
                            className="border-[1.5px] border-solid border-gray-400 px-2 py-2 rounded-sm text-xs"
                            type="text"
                            placeholder="Enter Last Name"
                        />
                        <input
                            className="border-[1.5px] border-solid border-gray-400 px-2 py-2 rounded-sm text-xs"
                            type="text"
                            placeholder="Enter Username"
                        />
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
                            placeholder="Confirm Password"
                            name="password" 
                            value={data.password}
                            onChange={handleChange}
                        />
                        <div className="flex flex-col gap-4 pt-2">
                            <div className="flex gap-3">
                                <input type="checkbox" />
                                <p className="text-xs">I agree to all terms</p>
                            </div>
                            <Button width="100px" bgColor="#FF9090" color="white" onClick={handleSubmit}>
                                Register
                            </Button>
                            {data.errorMessage && <p className="text-red-500">{data.errorMessage}</p>}
                            <p className="text-xs font-semibold">
                                Already have an account? <Link to="/login" className="text-blue-700">Sign In</Link>
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Register;
