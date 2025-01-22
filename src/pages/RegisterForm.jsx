import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { NavLink } from "react-router-dom";

const RegisterForm = () => {
  const [formData, setFormData] = useState({
    username: "",
    email: "",
    password: "",
    profileUrl: null, // Set to null
    bio: null, // Set to null
  });
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const validateForm = () => {
    if (!formData.username || !formData.email || !formData.password) {
      setError("Username, email, and password are required");
      return false;
    }
    if (!/\S+@\S+\.\S+/.test(formData.email)) {
      setError("Invalid email address");
      return false;
    }
    return true;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");

    if (!validateForm()) {
      return;
    }

    setLoading(true);
    try {
      // Prepare the data for the API
      const registerData = {
        username: formData.username,
        email: formData.email,
        password: formData.password,
        profileUrl: formData.profileUrl, // Include profileUrl (null)
        bio: formData.bio, // Include bio (null)
      };

      const response = await fetch(
        `${import.meta.env.VITE_BASE_URL}/register`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(registerData),
        }
      );

      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.message || "Registration failed");
      }

      const result = await response.json();
      console.log("Registration successful:", result);

      // Redirect to home page on success
      navigate("/");
    } catch (error) {
      console.error("Error during registration:", error);
      setError(error.message);
    } finally {
      setLoading(false);
    }
  };


  return (
    <div className="min-h-screen w-full px-16 dark:bg-slate-800 dark:text-white">
      <div className="block md:flex items-center justify-center dark:bg-slate-800 dark:text-white min-h-screen">
        <img className="md:w-2/5 self-center" src="./loginpage/image.png" alt="" />
        <form className="md:w-2/4 px-12 self-center py-8" onSubmit={handleSubmit}>
          {error && <div className="mb-5 text-red-500 text-sm">{error}</div>}
          <h3 className="text-2xl text-center mb-2 font-semibold">Register</h3>
          <p className="my-4 font-medium">Please fill out your information.</p>
          <div className="mb-5">
            <label
              htmlFor="username"
              className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
            >
              Username
            </label>
            <input
              type="text"
              id="username"
              name="username"
              value={formData.username}
              onChange={handleInputChange}
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              placeholder="Enter your username"
              required
            />
          </div>
          <div className="mb-5">
            <label
              htmlFor="email"
              className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
            >
              Your email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleInputChange}
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              placeholder="name@example.com"
              required
            />
          </div>
          <div className="mb-5">
            <label
              htmlFor="password"
              className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
            >
              Your password
            </label>
            <input
              type="password"
              id="password"
              name="password"
              value={formData.password}
              onChange={handleInputChange}
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              placeholder="Enter your password"
              required
            />
          </div>
          <p className="flex items-start mb-5">
            Already have account?
            <NavLink to="/login" className="text-[#1a6aff]">
              Login
            </NavLink>
          </p>
          <button
            type="submit"
            disabled={loading}
            onClick={handleSubmit}
            className="flex items-center justify-center gap-2 mx-auto w-2/4 text-white bg-[#1a6aff] hover:bg-[#ff7f50] focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center"
          >
            {loading ? "Registering..." : "Register"}
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 512 512"
              width="18"
              height="18"
              fill="currentColor"
              style={{ color: "white" }}
            >

<path d="M377.9 105.9L500.7 228.7c7.2 7.2 11.3 17.1 11.3 27.3s-4.1 20.1-11.3 27.3L377.9 406.1c-6.4 6.4-15 9.9-24 9.9c-18.7 0-33.9-15.2-33.9-33.9l0-62.1-128 0c-17.7 0-32-14.3-32-32l0-64c0-17.7 14.3-32 32-32l128 0 0-62.1c0-18.7 15.2-33.9 33.9-33.9c9 0 17.6 3.6 24 9.9zM160 96L96 96c-17.7 0-32 14.3-32 32l0 256c0 17.7 14.3 32 32 32l64 0c17.7 0 32 14.3 32 32s-14.3 32-32 32l-64 0c-53 0-96-43-96-96L0 128C0 75 43 32 96 32l64 0c17.7 0 32 14.3 32 32s-14.3 32-32 32z" />
            </svg>
          </button>
        </form>
      </div>
    </div>
  );
};

export default RegisterForm;
