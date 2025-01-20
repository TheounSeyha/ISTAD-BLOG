import { useState, useEffect, useRef } from "react";
import PostCard from "./Components/Postcard/Postcard";

function Account() {
  const [sidebarVisible, setSidebarVisible] = useState(false);
  const [dropdownVisible, setDropdownVisible] = useState(false);
  const [manageIconsVisible, setManageIconsVisible] = useState(false);

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

  return (
    <>
      <div className="bg-white shadow-md p-4 flex items-center justify-between">
        <div className="flex items-center">
          <button
            onClick={toggleSidebar}
            className="text-gray-600 focus:outline-none"
          >
            {/* Hamburger icon */}
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
          <img
            src="/Asset/Screenshot_2025-01-06_155003-removebg-preview.png"
            alt="Logo"
            className="ml-4 h-8"
          />
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
                <h3 className="text-lg font-semibold">Username</h3>
                <p className="text-sm text-gray-500">jen.wilson@example.com</p>
              </div>
            </div>
            <button className="w-full">
              <a
                href="#"
                className="flex items-center justify-center bg-[#BF9DFF] px-4 py-2 rounded-lg space-x-2 text-white hover:bg-[#FF5983]"
              >
                <i className="fa-solid fa-plus"></i>
                <span>New Post</span>
              </a>
            </button>
          </div>
          <nav className="mt-6 space-y-4">
            <ul className="space-y-4">
              <li className="w-full hover:bg-[#F0EFEF] py-2 px-2">
                <a
                  href="#"
                  className="flex items-center space-x-2 text-gray-600"
                >
                  <i className="fa-solid fa-file"></i>
                  <span>Your Post</span>
                </a>
              </li>
              <li className="w-full hover:bg-[#F0EFEF] py-2 px-2">
                <a
                  href="#"
                  className="flex items-center space-x-2 text-gray-600"
                >
                  <i className="fa-solid fa-pen"></i>
                  <span>Edit Profile</span>
                </a>
              </li>
              <li className="w-full hover:bg-[#F0EFEF] py-2 px-2">
                <a
                  href="#"
                  className="flex justify-between items-center space-x-2 text-gray-600"
                >
                  <span>
                    <i className="fa-solid fa-bell pr-2"></i> Notifications
                  </span>
                  <span className="bg-[#BF9DFF] px-2 rounded-lg text-white">
                    0
                  </span>
                </a>
              </li>
              <li className="w-full hover:bg-[#F0EFEF] py-2 px-2">
                <a
                  href="#"
                  className="flex items-center space-x-2 text-gray-600"
                >
                  <i className="fa-solid fa-gear"></i>
                  <span>Settings</span>
                </a>
              </li>
              <button className="block mx-auto">
                <a
                  href="#"
                  className="flex items-center bg-[#BF9DFF] px-4 py-2 rounded-lg space-x-2 text-white hover:bg-[#FF5983]"
                >
                  <i className="fa-solid fa-right-from-bracket"></i>
                  <span>Log out</span>
                </a>
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
            className={`${manageIconsVisible ? "opacity-50" : "hidden"} space-x-4 mt-4`}
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
          <PostCard/>
        </div>
      </div>
    </>
  );
}

export default Account;
