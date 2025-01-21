import React, { useState, useEffect, useRef } from 'react';
import PostCard from "../Components/Postcard/Postcard";
<<<<<<< HEAD
import { NavLink } from "react-router";
import { UserProfile } from "../services/profile";
=======
import { NavLink } from "react-router-dom";
>>>>>>> e9ef6341792ce13cf436ab6289e2a6368407d674

function Account() {
  const [sidebarVisible, setSidebarVisible] = useState(false);
  const [dropdownVisible, setDropdownVisible] = useState(false);
  const [manageIconsVisible, setManageIconsVisible] = useState(false);
  const [profile, setProfile] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
<<<<<<< HEAD
=======
  const [token, setToken] = useState(null);
>>>>>>> e9ef6341792ce13cf436ab6289e2a6368407d674

  const dropdownRef = useRef(null);

  const toggleSidebar = () => {
    setSidebarVisible(!sidebarVisible);
  };

  const toggleDropdown = () => {
    setDropdownVisible(!dropdownVisible);
  };

  const toggleManageIcons = () => {
    setManageIconsVisible(!manageIconsVisible);
  };

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setDropdownVisible(false);
      }
    };

    if (dropdownVisible) {
      document.addEventListener("mousedown", handleClickOutside);
    } else {
      document.removeEventListener("mousedown", handleClickOutside);
    }
  }, [dropdownVisible]);

  useEffect(() => {
    if (sidebarVisible) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }

    return () => {
      document.body.style.overflow = "auto";
    };
  }, [sidebarVisible]);
<<<<<<< HEAD
  useEffect(() => {
    const getProfile = async () => {
      try {
        const data = await UserProfile();
        setProfile(data);
        setLoading(false);
      } catch (error) {
        setError(error.message);
=======

  useEffect(() => {
    const fetchProfile = async () => {
      try {
        setLoading(true);
        // First, get the token from localStorage
        const storedToken = localStorage.getItem('authToken');
        console.log('Stored token:', storedToken);
        
        if (!storedToken) {
          throw new Error('No authentication token found');
        }

        setToken(storedToken);

        // Use the token to fetch the profile
        const response = await fetch(`${import.meta.env.VITE_BASE_URL}/users/profile`, {
          method: 'GET',
          headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${storedToken}`,
          },
        });

        if (!response.ok) {
          throw new Error('Failed to fetch profile');
        }

        const data = await response.json();
        console.log('Profile data:', data);
        setProfile(data);
        setLoading(false);
      } catch (err) {
        console.error('Error:', err);
        setError(err.message);
>>>>>>> e9ef6341792ce13cf436ab6289e2a6368407d674
        setLoading(false);
      }
    };

<<<<<<< HEAD
    getProfile();
  }, []);
  
=======
    fetchProfile();
  }, []);

  // Rest of your component remains the same
>>>>>>> e9ef6341792ce13cf436ab6289e2a6368407d674
  return (
    <>
      <div className="bg-white shadow-md p-4 flex items-center justify-between">
        <div className="flex items-center">
          <button
            onClick={toggleSidebar}
            className="text-gray-600 focus:outline-none"
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16M4 18h16"
              ></path>
            </svg>
          </button>
          <NavLink to="/">
            <img
              src="/Logo/Post-Pen-Logo.png"
              alt="Logo"
              className="ml-4 h-8"
            />
          </NavLink>
        </div>
        <input
          type="text"
          placeholder="Search Post"
          className="w-2/5 flex items-center space-x-4 mx-auto px-4 py-2 bg-[#F0F0F0] rounded-xl focus:border-[#ff7f50] focus:ring-2 focus:ring-[#ff7f50] focus:outline-none"
        />
      </div>

      <div className="flex w-full h-screen">
        {/* Sidebar */}
        <div
          className={`fixed top-20 left-0 h-full w-64 bg-white shadow-lg transform transition-transform duration-300 ${
            sidebarVisible ? "translate-x-0" : "-translate-x-full"
          } overflow-y-auto`}
        >
          <div className="p-4 space-y-4">
            <div className="flex items-center space-x-2">
              <div className="flex justify-center items-center bg-gray-500 rounded-full w-10 h-10">
                <i className="fa-solid fa-user text-white text-xl"></i>
              </div>
              <div className="ml-3">
                {loading ? (
                  <p>Loading...</p>
                ) : error ? (
                  <p className="text-red-500">Error: {error}</p>
                ) : profile ? (
                  <>
                    <h3 className="text-lg font-semibold">{profile.profile.username}</h3>
                    <p className="text-sm text-gray-500">{profile.profile.email}</p>
                  </>
                ) : (
                  <p>No profile data available</p>
                )}
              </div>
            </div>
            <button className="w-full">
              <NavLink
                to="#"
                className="flex items-center justify-center bg-[#BF9DFF] px-4 py-2 rounded-lg space-x-2 text-white hover:bg-[#FF5983]"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 448 512"
                  width="16"
                  height="16"
                  fill="currentColor"
                  style={{ color: "white" }}
                >
                  <path d="M256 80c0-17.7-14.3-32-32-32s-32 14.3-32 32l0 144L48 224c-17.7 0-32 14.3-32 32s14.3 32 32 32l144 0 0 144c0 17.7 14.3 32 32 32s32-14.3 32-32l0-144 144 0c17.7 0 32-14.3 32-32s-14.3-32-32-32l-144 0 0-144z" />
                </svg>
                <span>New Post</span>
              </NavLink>
            </button>
          </div>
          <nav className="mt-2 space-y-4">
            <p className="text-gray-600 ml-4">Menu</p>
            <ul className="space-y-4 px-2">
              <li className="w-full hover:bg-[#F0EFEF] py-2 px-2">
                <NavLink
                  to="#"
                  className="flex items-center space-x-2 text-gray-600"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 384 512"
                    width="16"
                    height="16"
                    fill="currentColor"
                    style={{ color: "gray" }}
                  >
                    <path d="M0 64C0 28.7 28.7 0 64 0L224 0l0 128c0 17.7 14.3 32 32 32l128 0 0 288c0 35.3-28.7 64-64 64L64 512c-35.3 0-64-28.7-64-64L0 64zm384 64l-128 0L256 0 384 128z" />
                  </svg>
                  <span>Your Post</span>
                </NavLink>
              </li>
              <li className="w-full hover:bg-[#F0EFEF] py-2 px-2">
                <NavLink
                  to="#"
                  className="flex items-center space-x-2 text-gray-600"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 512 512"
                    width="16"
                    height="16"
                    fill="currentColor"
                    style={{ color: "gray" }}
                  >
                    <path d="M362.7 19.3L314.3 67.7 444.3 197.7l48.4-48.4c25-25 25-65.5 0-90.5L453.3 19.3c-25-25-65.5-25-90.5 0zm-71 71L58.6 323.5c-10.4 10.4-18 23.3-22.2 37.4L1 481.2C-1.5 489.7 .8 498.8 7 505s15.3 8.5 23.7 6.1l120.3-35.4c14.1-4.2 27-11.8 37.4-22.2L421.7 220.3 291.7 90.3z" />
                  </svg>
                  <span>Edit Profile</span>
                </NavLink>
              </li>
              <li className="w-full hover:bg-[#F0EFEF] py-2 px-2">
                <a
                  href="#"
                  className="flex justify-between items-center space-x-2 text-gray-600"
                >
                  <span className="flex items-center gap-2">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 448 512"
                      width="16"
                      height="16"
                      fill="currentColor"
                      style={{ color: "gray" }}
                    >
                      <path d="M224 0c-17.7 0-32 14.3-32 32l0 19.2C119 66 64 130.6 64 208l0 18.8c0 47-17.3 92.4-48.5 127.6l-7.4 8.3c-8.4 9.4-10.4 22.9-5.3 34.4S19.4 416 32 416l384 0c12.6 0 24-7.4 29.2-18.9s3.1-25-5.3-34.4l-7.4-8.3C401.3 319.2 384 273.9 384 226.8l0-18.8c0-77.4-55-142-128-156.8L256 32c0-17.7-14.3-32-32-32zm45.3 493.3c12-12 18.7-28.3 18.7-45.3l-64 0-64 0c0 17 6.7 33.3 18.7 45.3s28.3 18.7 45.3 18.7s33.3-6.7 45.3-18.7z" />
                    </svg>
                    Notifications
                  </span>
                  <span className="bg-[#BF9DFF] px-2 rounded-lg text-white">
                    0
                  </span>
                </a>
              </li>
              <li className="w-full hover:bg-[#F0EFEF] py-2 px-2">
                <NavLink
                  to="#"
                  className="flex items-center space-x-2 text-gray-600"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 512 512"
                    width="16"
                    height="16"
                    fill="currentColor"
                    style={{ color: "gray" }}
                  >
                    <path d="M495.9 166.6c3.2 8.7 .5 18.4-6.4 24.6l-43.3 39.4c1.1 8.3 1.7 16.8 1.7 25.4s-.6 17.1-1.7 25.4l43.3 39.4c6.9 6.2 9.6 15.9 6.4 24.6c-4.4 11.9-9.7 23.3-15.8 34.3l-4.7 8.1c-6.6 11-14 21.4-22.1 31.2c-5.9 7.2-15.7 9.6-24.5 6.8l-55.7-17.7c-13.4 10.3-28.2 18.9-44 25.4l-12.5 57.1c-2 9.1-9 16.3-18.2 17.8c-13.8 2.3-28 3.5-42.5 3.5s-28.7-1.2-42.5-3.5c-9.2-1.5-16.2-8.7-18.2-17.8l-12.5-57.1c-15.8-6.5-30.6-15.1-44-25.4L83.1 425.9c-8.8 2.8-18.6 .3-24.5-6.8c-8.1-9.8-15.5-20.2-22.1-31.2l-4.7-8.1c-6.1-11-11.4-22.4-15.8-34.3c-3.2-8.7-.5-18.4 6.4-24.6l43.3-39.4C64.6 273.1 64 264.6 64 256s.6-17.1 1.7-25.4L22.4 191.2c-6.9-6.2-9.6-15.9-6.4-24.6c4.4-11.9 9.7-23.3 15.8-34.3l4.7-8.1c6.6-11 14-21.4 22.1-31.2c5.9-7.2 15.7-9.6 24.5-6.8l55.7 17.7c13.4-10.3 28.2-18.9 44-25.4l12.5-57.1c2-9.1 9-16.3 18.2-17.8C227.3 1.2 241.5 0 256 0s28.7 1.2 42.5 3.5c9.2 1.5 16.2 8.7 18.2 17.8l12.5 57.1c15.8 6.5 30.6 15.1 44 25.4l55.7-17.7c8.8-2.8 18.6-.3 24.5 6.8c8.1 9.8 15.5 20.2 22.1 31.2l4.7 8.1c6.1 11 11.4 22.4 15.8 34.3zM256 336a80 80 0 1 0 0-160 80 80 0 1 0 0 160z" />
                  </svg>
                  <span>Settings</span>
                </NavLink>
              </li>
              <button className="block mx-auto">
                <NavLink
                  to="#"
                  className="flex items-center bg-[#BF9DFF] px-4 py-2 rounded-lg space-x-2 text-white hover:bg-[#FF5983]"
                >
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
                  <span>Log out</span>
                </NavLink>
              </button>
            </ul>
          </nav>
        </div>

        {/* Content Area */}
        <div
          className={`flex-1 py-4 px-[100px] space-y-4 ${
            sidebarVisible ? "ml-64" : "ml-0"
          } transition-all duration-300`}
        >
          <div className="flex justify-between">
            <button
              onClick={toggleDropdown}
              className="flex items-center relative"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 320 512"
                width="16"
                height="16"
                fill="currentColor"
                style={{ color: "black" }}
              >
                <path d="M137.4 374.6c12.5 12.5 32.8 12.5 45.3 0l128-128c9.2-9.2 11.9-22.9 6.9-34.9s-16.6-19.8-29.6-19.8L32 192c-12.9 0-24.6 7.8-29.6 19.8s-2.2 25.7 6.9 34.9l128 128z" />
              </svg>
            </button>
            <button onClick={toggleManageIcons}>Manage</button>
          </div>

          {/* Manage Icons */}
          <div
            className={`${
              manageIconsVisible ? "opacity-50" : "hidden"
            } space-x-4 mt-4`}
          >
            <button className="text-gray-600 hover:text-gray-800">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 448 512"
                width="16"
                height="16"
                fill="currentColor"
                style={{ color: "black" }}
              >
                <path d="M135.2 17.7L128 32 32 32C14.3 32 0 46.3 0 64S14.3 96 32 96l384 0c17.7 0 32-14.3 32-32s-14.3-32-32-32l-96 0-7.2-14.3C307.4 6.8 296.3 0 284.2 0L163.8 0c-12.1 0-23.2 6.8-28.6 17.7zM416 128L32 128 53.2 467c1.6 25.3 22.6 45 47.9 45l245.8 0c25.3 0 46.3-19.7 47.9-45L416 128z" />
              </svg>
            </button>
            <button className="text-gray-600 hover:text-gray-800">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 512 512"
                width="16"
                height="16"
                fill="currentColor"
                style={{ color: "black" }}
              >
                <path d="M288 109.3L288 352c0 17.7-14.3 32-32 32s-32-14.3-32-32l0-242.7-73.4 73.4c-12.5 12.5-32.8 12.5-45.3 0s-12.5-32.8 0-45.3l128-128c12.5-12.5 32.8-12.5 45.3 0l128 128c12.5 12.5 12.5 32.8 0 45.3s-32.8 12.5-45.3 0L288 109.3zM64 352l128 0c0 35.3 28.7 64 64 64s64-28.7 64-64l128 0c35.3 0 64 28.7 64 64l0 32c0 35.3-28.7 64-64 64L64 512c-35.3 0-64-28.7-64-64l0-32c0-35.3 28.7-64 64-64zM432 456a24 24 0 1 0 0-48 24 24 0 1 0 0 48z" />
              </svg>
            </button>
          </div>

          {/* Dropdown */}
          <div
            ref={dropdownRef}
            className={`w-28 border border-gray-200 shadow-md list-none bg-white ${
              dropdownVisible ? "" : "hidden"
            } absolute z-50`}
          >
            <ul>
              <li className="w-full px-4 py-2 hover:bg-[#F0EFEF]">
                <a href="#">All (1)</a>
              </li>
              <li className="w-full px-4 py-2 hover:bg-[#F0EFEF]">
                <a href="#">Public (0)</a>
              </li>
              <li className="w-full px-4 py-2 hover:bg-[#F0EFEF]">
                <a href="#">Draft (1)</a>
              </li>
            </ul>
          </div>

          {/* Post Card */}
          <div>
            <PostCard />
          </div>
        </div>
      </div>
    </>
  );
}

export default Account;