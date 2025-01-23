import { NavLink } from "react-router-dom";
import { useEffect, useRef, useState } from "react";

export default function Nav_bar() {
  const [isEducationDropdownOpen, setIsEducationDropdownOpen] = useState(false);
  const [isTechnologyDropdownOpen, setIsTechnologyDropdownOpen] =
    useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isSearchDropdownOpen, setIsSearchDropdownOpen] = useState(false);

  const toggleEducationDropdown = () => {
    setIsEducationDropdownOpen(!isEducationDropdownOpen);
  };

  const toggleTechnologyDropdown = () => {
    setIsTechnologyDropdownOpen(!isTechnologyDropdownOpen);
  };

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };
  const toggleSearchDropdown = () => {
    setIsSearchDropdownOpen(!isSearchDropdownOpen);
  };

  const [darkMode, setDarkMode] = useState(false);
  useEffect(() => {
    const savedTheme = localStorage.getItem("darkMode");
    if (savedTheme === "enabled") {
      document.documentElement.classList.add("dark");
      setDarkMode(true);
    }
  }, []);

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
    if (!darkMode) {
      document.documentElement.classList.add("dark");
      localStorage.setItem("darkMode", "enabled");
    } else {
      document.documentElement.classList.remove("dark");
      localStorage.setItem("darkMode", "disabled");
    }
  };
  const [user, setUser] = useState(null); // Assume this is fetched from an API or context
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const dropdownRef = useRef(null);

  // Simulating fetching user details (this can be replaced with actual API call or context)
  useEffect(() => {
    // Check if the user is logged in (use actual logic for authentication)
    const loggedInUser = localStorage.getItem("authToken"); // Example of getting user from local storage
    setUser(loggedInUser);
  }, []);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setDropdownOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <>
      <section className="w-full bg-white py-4 px-12 shadow-md dark:bg-slate-800 dark:text-white sticky top-0 z-[1000]">
        <div className="grid grid-cols-2 lg:flex items-center justify-between">
          <div className="flex items-center space-x-2 lg:w-1/6">
            <NavLink to="/" className="flex items-center space-x-2">
              <img
                src="/Logo/Post-Pen-Logo.png"
                alt="PostPen Logo"
                className="w-8 h-8"
              />
              <h3 className="text-2xl font-semibold">PostPen</h3>
            </NavLink>
          </div>

          <button
            className="justify-self-end block lg:hidden focus:outline-none"
            onClick={toggleMobileMenu}
          >
            &#9776;
          </button>

          <nav className="w-4/6">
            <ul className="hidden lg:flex justify-between items-center">
              <div className="flex gap-10">
                <li>
                  <NavLink
                    to="/about"
                    className={({ isActive }) =>
                      isActive ? "text-[#FF9067]" : "hover:text-[#FF9067]"
                    }
                  >
                    About
                  </NavLink>
                </li>

                <li className="relative">
                  <NavLink
                    onClick={toggleEducationDropdown}
                    className={({ isActive }) =>
                      isActive
                        ? "flex items-center gap-2 hover:text-[#FF9067]"
                        : ""
                    }
                  >
                    Education
                    <span className="text-black dark:text-white">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 320 512"
                        width="16"
                        height="16"
                        fill="currentColor"
                      >
                        <path d="M137.4 374.6c12.5 12.5 32.8 12.5 45.3 0l128-128c9.2-9.2 11.9-22.9 6.9-34.9s-16.6-19.8-29.6-19.8L32 192c-12.9 0-24.6 7.8-29.6 19.8s-2.2 25.7 6.9 34.9l128 128z" />
                      </svg>
                    </span>
                  </NavLink>
                  {isEducationDropdownOpen && (
                    <ul className="absolute left-0 mt-2 w-48 p-2 bg-white border border-gray-600 rounded shadow-lg z-50 dark:bg-slate-800 dark:text-white">
                      <li>
                        <NavLink
                          to=""
                          className="flex items-center gap-2 px-4 py-2 text-gray-700 hover:bg-[#F0EFEF] dark:bg-slate-800 dark:text-white dark:hover:bg-[#F0EFEF]/25"
                        >
                          <span className="text-gray-600 dark:text-white">
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              viewBox="0 0 448 512"
                              width="16"
                              height="16"
                              fill="currentColor"
                            >
                              <path d="M96 0C43 0 0 43 0 96L0 416c0 53 43 96 96 96l288 0 32 0c17.7 0 32-14.3 32-32s-14.3-32-32-32l0-64c17.7 0 32-14.3 32-32l0-320c0-17.7-14.3-32-32-32L384 0 96 0zm0 384l256 0 0 64L96 448c-17.7 0-32-14.3-32-32s14.3-32 32-32zm32-240c0-8.8 7.2-16 16-16l192 0c8.8 0 16 7.2 16 16s-7.2 16-16 16l-192 0c-8.8 0-16-7.2-16-16zm16 48l192 0c8.8 0 16 7.2 16 16s-7.2 16-16 16l-192 0c-8.8 0-16-7.2-16-16s7.2-16 16-16z" />
                            </svg>
                          </span>
                          General
                        </NavLink>
                      </li>
                      <li>
                        <NavLink
                          to=""
                          className="flex items-center gap-2 px-4 py-2 text-gray-700 hover:bg-[#F0EFEF] dark:bg-slate-800 dark:text-white dark:hover:bg-[#F0EFEF]/25"
                        >
                          <span className="text-gray-600 dark:text-white">
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              viewBox="0 0 448 512"
                              width="16"
                              height="16"
                              fill="currentColor"
                            >
                              <path d="M80 104a24 24 0 1 0 0-48 24 24 0 1 0 0 48zm80-24c0 32.8-19.7 61-48 73.3l0 87.8c18.8-10.9 40.7-17.1 64-17.1l96 0c35.3 0 64-28.7 64-64l0-6.7C307.7 141 288 112.8 288 80c0-44.2 35.8-80 80-80s80 35.8 80 80c0 32.8-19.7 61-48 73.3l0 6.7c0 70.7-57.3 128-128 128l-96 0c-35.3 0-64 28.7-64 64l0 6.7c28.3 12.3 48 40.5 48 73.3c0 44.2-35.8 80-80 80s-80-35.8-80-80c0-32.8 19.7-61 48-73.3l0-6.7 0-198.7C19.7 141 0 112.8 0 80C0 35.8 35.8 0 80 0s80 35.8 80 80zm232 0a24 24 0 1 0 -48 0 24 24 0 1 0 48 0zM80 456a24 24 0 1 0 0-48 24 24 0 1 0 0 48z" />
                            </svg>
                          </span>
                          Soft-skills
                        </NavLink>
                      </li>
                    </ul>
                  )}
                </li>

                <li className="relative">
                  <NavLink
                    onClick={toggleTechnologyDropdown}
                    className={({ isActive }) =>
                      isActive
                        ? "flex items-center gap-2 hover:text-[#FF9067]"
                        : ""
                    }
                  >
                    Technology
                    <span className="text-black dark:text-white">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 320 512"
                        width="16"
                        height="16"
                        fill="currentColor"
                      >
                        <path d="M137.4 374.6c12.5 12.5 32.8 12.5 45.3 0l128-128c9.2-9.2 11.9-22.9 6.9-34.9s-16.6-19.8-29.6-19.8L32 192c-12.9 0-24.6 7.8-29.6 19.8s-2.2 25.7 6.9 34.9l128 128z" />
                      </svg>
                    </span>
                  </NavLink>
                  {isTechnologyDropdownOpen && (
                    <ul className="absolute left-0 mt-2 w-48 p-2 bg-white border border-gray-400 rounded shadow-lg z-50 dark:bg-slate-800 dark:text-white">
                      <li>
                        <NavLink
                          to=""
                          className="flex items-center gap-2 px-4 py-2 text-gray-700 hover:bg-[#F0EFEF] dark:bg-slate-800 dark:text-white dark:hover:bg-[#F0EFEF]/25"
                        >
                          <span className="text-gray-600 dark:text-white">
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              viewBox="0 0 448 512"
                              width="16"
                              height="16"
                              fill="currentColor"
                            >
                              <path d="M248 106.6c18.9-9 32-28.3 32-50.6c0-30.9-25.1-56-56-56s-56 25.1-56 56c0 22.3 13.1 41.6 32 50.6l0 98.8c-2.8 1.3-5.5 2.9-8 4.7l-80.1-45.8c1.6-20.8-8.6-41.6-27.9-52.8C57.2 96 23 105.2 7.5 132S1.2 193 28 208.5c1.3 .8 2.6 1.5 4 2.1l0 90.8c-1.3 .6-2.7 1.3-4 2.1C1.2 319-8 353.2 7.5 380S57.2 416 84 400.5c19.3-11.1 29.4-32 27.8-52.8l50.5-28.9c-11.5-11.2-19.9-25.6-23.8-41.7L88 306.1c-2.6-1.8-5.2-3.3-8-4.7l0-90.8c2.8-1.3 5.5-2.9 8-4.7l80.1 45.8c-.1 1.4-.2 2.8-.2 4.3c0 22.3 13.1 41.6 32 50.6l0 98.8c-18.9 9-32 28.3-32 50.6c0 30.9 25.1 56 56 56s56-25.1 56-56c0-22.3-13.1-41.6-32-50.6l0-98.8c2.8-1.3 5.5-2.9 8-4.7l80.1 45.8c-1.6 20.8 8.6 41.6 27.8 52.8c26.8 15.5 61 6.3 76.5-20.5s6.3-61-20.5-76.5c-1.3-.8-2.7-1.5-4-2.1l0-90.8c1.4-.6 2.7-1.3 4-2.1c26.8-15.5 36-49.7 20.5-76.5S390.8 96 364 111.5c-19.3 11.1-29.4 32-27.8 52.8l-50.6 28.9c11.5 11.2 19.9 25.6 23.8 41.7L360 205.9c2.6 1.8 5.2 3.3 8 4.7l0 90.8c-2.8 1.3-5.5 2.9-8 4.6l-80.1-45.8c.1-1.4 .2-2.8 .2-4.3c0-22.3-13.1-41.6-32-50.6l0-98.8z" />
                            </svg>
                          </span>
                          AI
                        </NavLink>
                      </li>
                      <li>
                        <NavLink
                          to=""
                          className="flex items-center gap-2 px-4 py-2 text-gray-700 hover:bg-[#F0EFEF] dark:bg-slate-800 dark:text-white dark:hover:bg-[#F0EFEF]/25"
                        >
                          <span className="text-gray-600 dark:text-white">
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              viewBox="0 0 448 512"
                              width="16"
                              height="16"
                              fill="currentColor"
                            >
                              <path d="M80 104a24 24 0 1 0 0-48 24 24 0 1 0 0 48zm80-24c0 32.8-19.7 61-48 73.3l0 87.8c18.8-10.9 40.7-17.1 64-17.1l96 0c35.3 0 64-28.7 64-64l0-6.7C307.7 141 288 112.8 288 80c0-44.2 35.8-80 80-80s80 35.8 80 80c0 32.8-19.7 61-48 73.3l0 6.7c0 70.7-57.3 128-128 128l-96 0c-35.3 0-64 28.7-64 64l0 6.7c28.3 12.3 48 40.5 48 73.3c0 44.2-35.8 80-80 80s-80-35.8-80-80c0-32.8 19.7-61 48-73.3l0-6.7 0-198.7C19.7 141 0 112.8 0 80C0 35.8 35.8 0 80 0s80 35.8 80 80zm232 0a24 24 0 1 0 -48 0 24 24 0 1 0 48 0zM80 456a24 24 0 1 0 0-48 24 24 0 1 0 0 48z" />
                            </svg>
                          </span>
                          New Technology
                        </NavLink>
                      </li>
                    </ul>
                  )}
                </li>
              </div>

              <div className="flex items-center gap-4">
                <li className="relative">
                  <button
                    className="hover:text-[#FF9067]"
                    onClick={toggleSearchDropdown}
                  >
                    <span className="text-gray-600 dark:text-white">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 512 512"
                        width="25"
                        height="25"
                        fill="currentColor"
                      >
                        <path d="M416 208c0 45.9-14.9 88.3-40 122.7L502.6 457.4c12.5 12.5 12.5 32.8 0 45.3s-32.8 12.5-45.3 0L330.7 376c-34.4 25.2-76.8 40-122.7 40C93.1 416 0 322.9 0 208S93.1 0 208 0S416 93.1 416 208zM208 352a144 144 0 1 0 0-288 144 144 0 1 0 0 288z" />
                      </svg>
                    </span>
                  </button>
                  {isSearchDropdownOpen && ( // Conditional rendering for the dropdown
                    <div
                      id="search-dropdown"
                      className="absolute right-0 mt-2 w-64 bg-white p-4 border border-gray-200 rounded shadow-lg z-50"
                    >
                      <input
                        type="text"
                        placeholder="Search..."
                        className="w-full p-2 border rounded focus:outline-none focus:ring-2 focus:ring-[#FF9067]"
                      />
                      <button className="mt-2 bg-[#ff7f50] text-white px-4 py-2 rounded hover:bg-[#FF9067]">
                        Search
                      </button>
                    </div>
                  )}
                </li>
                <li>
                  <button onClick={toggleDarkMode}>
                    <span className="text-gray-600 dark:text-white">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 384 512"
                        width="25"
                        height="25"
                        fill="currentColor"
                      >
                        <path d="M223.5 32C100 32 0 132.3 0 256S100 480 223.5 480c60.6 0 115.5-24.2 155.8-63.4c5-4.9 6.3-12.5 3.1-18.7s-10.1-9.7-17-8.5c-9.8 1.7-19.8 2.6-30.1 2.6c-96.9 0-175.5-78.8-175.5-176c0-65.8 36-123.1 89.3-153.3c6.1-3.5 9.2-10.5 7.7-17.3s-7.3-11.9-14.3-12.5c-6.3-.5-12.6-.8-19-.8z" />
                      </svg>
                    </span>
                  </button>
                </li>
                <li className="relative" ref={dropdownRef}>
                  {user ? (
                    <div className="relative flex items-center gap-2">
                      {/* Profile and Username */}
                      <div
                        onClick={() => setDropdownOpen(!dropdownOpen)}
                        className="flex items-center gap-2 cursor-pointer"
                      >
                        <img
                          src={
                            user.profileUrl ||
                            "https://media.istockphoto.com/id/2151669184/vector/vector-flat-illustration-in-grayscale-avatar-user-profile-person-icon-gender-neutral.jpg?s=612x612&w=0&k=20&c=UEa7oHoOL30ynvmJzSCIPrwwopJdfqzBs0q69ezQoM8="
                          }
                          alt={user.username || "User"}
                          className="w-8 h-8 rounded-full"
                        />
                        <span className="text-sm font-semibold text-gray-800">
                          {user.username}
                        </span>
                      </div>

                      {/* Dropdown */}
                      {dropdownOpen && (
                        <div className="absolute right-0 top-10 w-40 bg-white border border-gray-200 rounded-lg shadow-lg z-10">
                          <button
                            onClick={() => {
                              localStorage.removeItem("authToken");
                              window.location.reload();
                            }}
                            className="block w-full px-4 py-2 text-left text-gray-700 hover:bg-gray-100"
                          >
                            Sign Out
                          </button>
                          <button
                            onClick={() => {
                              window.location.href = "/account";
                            }}
                            className="block w-full px-4 py-2 text-left text-gray-700 hover:bg-gray-100"
                          >
                            Account
                          </button>
                        </div>
                      )}
                    </div>
                  ) : (
                    // Sign-Up Button
                    <a
                      href="/login"
                      className="bg-[#ff7f50] text-white px-4 py-2 rounded hover:bg-[#FF9067] flex items-center gap-2"
                    >
                      Sign Up
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
                    </a>
                  )}
                </li>
              </div>
            </ul>

            {isMobileMenuOpen && (
              <ul
                id="mobile-menu"
                className="absolute top-16 left-0 w-full bg-white p-4 shadow-md z-50 lg:hidden dark:bg-slate-800 dark:text-white"
              >
                <li>
                  <NavLink
                    to="/about"
                    className="hover:text-[#FF9067] block py-2"
                    activeClassName="text-[#FF7F50]"
                  >
                    About
                  </NavLink>
                </li>
                <li className="relative">
                  <button
                    className=" hover:text-[#FF9067] flex items-center py-2 gap-2"
                    onClick={toggleEducationDropdown}
                    activeClassName="text-[#FF7F50]"
                  >
                    Education
                    <span className="text-black dark:text-white">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 320 512"
                        width="16"
                        height="16"
                        fill="currentColor"
                      >
                        <path d="M137.4 374.6c12.5 12.5 32.8 12.5 45.3 0l128-128c9.2-9.2 11.9-22.9 6.9-34.9s-16.6-19.8-29.6-19.8L32 192c-12.9 0-24.6 7.8-29.6 19.8s-2.2 25.7 6.9 34.9l128 128z" />
                      </svg>
                    </span>
                  </button>
                  {isEducationDropdownOpen && (
                    <ul className="absolute left-0 mt-2 w-48 p-2 bg-white border border-gray-200 rounded shadow-lg z-50 dark:bg-slate-800 dark:text-white">
                      <li>
                        <NavLink
                          to=""
                          className="flex items-center gap-2 px-4 py-2 text-gray-700 hover:bg-[#F0EFEF] dark:bg-slate-800 dark:text-white dark:hover:bg-[#F0EFEF]/25"
                        >
                          <span className="text-gray-600 dark:text-white">
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              viewBox="0 0 448 512"
                              width="16"
                              height="16"
                              fill="currentColor"
                            >
                              <path d="M96 0C43 0 0 43 0 96L0 416c0 53 43 96 96 96l288 0 32 0c17.7 0 32-14.3 32-32s-14.3-32-32-32l0-64c17.7 0 32-14.3 32-32l0-320c0-17.7-14.3-32-32-32L384 0 96 0zm0 384l256 0 0 64L96 448c-17.7 0-32-14.3-32-32s14.3-32 32-32zm32-240c0-8.8 7.2-16 16-16l192 0c8.8 0 16 7.2 16 16s-7.2 16-16 16l-192 0c-8.8 0-16-7.2-16-16zm16 48l192 0c8.8 0 16 7.2 16 16s-7.2 16-16 16l-192 0c-8.8 0-16-7.2-16-16s7.2-16 16-16z" />
                            </svg>
                          </span>
                          General
                        </NavLink>
                      </li>
                      <li>
                        <NavLink
                          to=""
                          className="flex items-center gap-2 px-4 py-2 text-gray-700 hover:bg-[#F0EFEF]"
                        >
                          <span className="text-gray-600 dark:text-white">
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              viewBox="0 0 448 512"
                              width="16"
                              height="16"
                              fill="currentColor"
                            >
                              <path d="M80 104a24 24 0 1 0 0-48 24 24 0 1 0 0 48zm80-24c0 32.8-19.7 61-48 73.3l0 87.8c18.8-10.9 40.7-17.1 64-17.1l96 0c35.3 0 64-28.7 64-64l0-6.7C307.7 141 288 112.8 288 80c0-44.2 35.8-80 80-80s80 35.8 80 80c0 32.8-19.7 61-48 73.3l0 6.7c0 70.7-57.3 128-128 128l-96 0c-35.3 0-64 28.7-64 64l0 6.7c28.3 12.3 48 40.5 48 73.3c0 44.2-35.8 80-80 80s-80-35.8-80-80c0-32.8 19.7-61 48-73.3l0-6.7 0-198.7C19.7 141 0 112.8 0 80C0 35.8 35.8 0 80 0s80 35.8 80 80zm232 0a24 24 0 1 0 -48 0 24 24 0 1 0 48 0zM80 456a24 24 0 1 0 0-48 24 24 0 1 0 0 48z" />
                            </svg>
                          </span>
                          Soft-skills
                        </NavLink>
                      </li>
                    </ul>
                  )}
                </li>

                <li className="relative">
                  <button
                    className="hover:text-[#FF9067] flex items-center py-2 gap-2 dark:text-white dark:hover:bg-[#F0EFEF]/25"
                    onClick={toggleTechnologyDropdown}
                    activeClassName="text-[#FF7F50]"
                  >
                    Technology
                    <span className="text-black dark:text-white">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 320 512"
                        width="16"
                        height="16"
                        fill="currentColor"
                      >
                        <path d="M137.4 374.6c12.5 12.5 32.8 12.5 45.3 0l128-128c9.2-9.2 11.9-22.9 6.9-34.9s-16.6-19.8-29.6-19.8L32 192c-12.9 0-24.6 7.8-29.6 19.8s-2.2 25.7 6.9 34.9l128 128z" />
                      </svg>
                    </span>
                  </button>
                  {isTechnologyDropdownOpen && (
                    <ul className="absolute left-0 mt-2 w-48 p-2 bg-white border border-gray-200 rounded shadow-lg z-100 dark:bg-slate-800 dark:text-white">
                      <li>
                        <NavLink
                          to=""
                          className="flex items-center gap-2 px-4 py-2 text-gray-700 hover:bg-[#F0EFEF] dark:text-white dark:hover:bg-[#F0EFEF]/25"
                        >
                          <span className="text-gray-400 dark:text-white">
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              viewBox="0 0 448 512"
                              width="16"
                              height="16"
                              fill="currentColor"
                            >
                              <path d="M248 106.6c18.9-9 32-28.3 32-50.6c0-30.9-25.1-56-56-56s-56 25.1-56 56c0 22.3 13.1 41.6 32 50.6l0 98.8c-2.8 1.3-5.5 2.9-8 4.7l-80.1-45.8c1.6-20.8-8.6-41.6-27.9-52.8C57.2 96 23 105.2 7.5 132S1.2 193 28 208.5c1.3 .8 2.6 1.5 4 2.1l0 90.8c-1.3 .6-2.7 1.3-4 2.1C1.2 319-8 353.2 7.5 380S57.2 416 84 400.5c19.3-11.1 29.4-32 27.8-52.8l50.5-28.9c-11.5-11.2-19.9-25.6-23.8-41.7L88 306.1c-2.6-1.8-5.2-3.3-8-4.7l0-90.8c2.8-1.3 5.5-2.9 8-4.7l80.1 45.8c-.1 1.4-.2 2.8-.2 4.3c0 22.3 13.1 41.6 32 50.6l0 98.8c-18.9 9-32 28.3-32 50.6c0 30.9 25.1 56 56 56s56-25.1 56-56c0-22.3-13.1-41.6-32-50.6l0-98.8c2.8-1.3 5.5-2.9 8-4.7l80.1 45.8c-1.6 20.8 8.6 41.6 27.8 52.8c26.8 15.5 61 6.3 76.5-20.5s6.3-61-20.5-76.5c-1.3-.8-2.7-1.5-4-2.1l0-90.8c1.4-.6 2.7-1.3 4-2.1c26.8-15.5 36-49.7 20.5-76.5S390.8 96 364 111.5c-19.3 11.1-29.4 32-27.8 52.8l-50.6 28.9c11.5 11.2 19.9 25.6 23.8 41.7L360 205.9c2.6 1.8 5.2 3.3 8 4.7l0 90.8c-2.8 1.3-5.5 2.9-8 4.6l-80.1-45.8c.1-1.4 .2-2.8 .2-4.3c0-22.3-13.1-41.6-32-50.6l0-98.8z" />
                            </svg>
                          </span>
                          AI
                        </NavLink>
                      </li>
                      <li>
                        <NavLink
                          to=""
                          className="flex items-center gap-2 px-4 py-2 text-gray-700 hover:bg-[#F0EFEF] dark:text-white dark:hover:bg-[#F0EFEF]/25"
                        >
                          <span className="text-gray-400 dark:text-white">
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              viewBox="0 0 448 512"
                              width="16"
                              height="16"
                              fill="currentColor"
                            >
                              <path d="M80 104a24 24 0 1 0 0-48 24 24 0 1 0 0 48zm80-24c0 32.8-19.7 61-48 73.3l0 87.8c18.8-10.9 40.7-17.1 64-17.1l96 0c35.3 0 64-28.7 64-64l0-6.7C307.7 141 288 112.8 288 80c0-44.2 35.8-80 80-80s80 35.8 80 80c0 32.8-19.7 61-48 73.3l0 6.7c0 70.7-57.3 128-128 128l-96 0c-35.3 0-64 28.7-64 64l0 6.7c28.3 12.3 48 40.5 48 73.3c0 44.2-35.8 80-80 80s-80-35.8-80-80c0-32.8 19.7-61 48-73.3l0-6.7 0-198.7C19.7 141 0 112.8 0 80C0 35.8 35.8 0 80 0s80 35.8 80 80zm232 0a24 24 0 1 0 -48 0 24 24 0 1 0 48 0zM80 456a24 24 0 1 0 0-48 24 24 0 1 0 0 48z" />
                            </svg>
                          </span>
                          New Technology
                        </NavLink>
                      </li>
                    </ul>
                  )}
                </li>
                <li>
                  <button onClick={toggleDarkMode}>
                    <span className="flex items-center gap-2 py-2 text-gray-600 dark:text-white">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 384 512"
                        width="25"
                        height="25"
                        fill="currentColor"
                      >
                        <path d="M223.5 32C100 32 0 132.3 0 256S100 480 223.5 480c60.6 0 115.5-24.2 155.8-63.4c5-4.9 6.3-12.5 3.1-18.7s-10.1-9.7-17-8.5c-9.8 1.7-19.8 2.6-30.1 2.6c-96.9 0-175.5-78.8-175.5-176c0-65.8 36-123.1 89.3-153.3c6.1-3.5 9.2-10.5 7.7-17.3s-7.3-11.9-14.3-12.5c-6.3-.5-12.6-.8-19-.8z" />
                      </svg>
                      Dark mode
                    </span>
                  </button>
                </li>
                <li>
                  <input
                    type="text"
                    placeholder="Search..."
                    className="w-full p-2 border rounded focus:outline-none focus:ring-2 focus:ring-[#FF9067] dark:bg-slate-800"
                  />
                  <button className="my-2 bg-[#ff7f50] text-white px-4 py-2 rounded hover:bg-[#FF9067]">
                    Search
                  </button>
                </li>
                
                <li className="relative" ref={dropdownRef}>
                  {user ? (
                    <div className="relative flex items-center gap-2">
                      {/* Profile and Username */}
                      <div
                        onClick={() => setDropdownOpen(!dropdownOpen)}
                        className="flex items-center gap-2 cursor-pointer"
                      >
                        <img
                          src={
                            user.profileUrl ||
                            "https://media.istockphoto.com/id/2151669184/vector/vector-flat-illustration-in-grayscale-avatar-user-profile-person-icon-gender-neutral.jpg?s=612x612&w=0&k=20&c=UEa7oHoOL30ynvmJzSCIPrwwopJdfqzBs0q69ezQoM8="
                          }
                          alt={user.username || "User"}
                          className="w-8 h-8 rounded-full"
                        />
                        <span className="text-sm font-semibold text-white">
                          {user.username}
                        </span>
                      </div>

                      {/* Dropdown */}
                      {dropdownOpen && (
                        <div className="absolute left0 top-10 w-40 bg-white border border-gray-200 rounded-lg shadow-lg z-10">
                          <button
                            onClick={() => {
                              localStorage.removeItem("authToken");
                              window.location.reload();
                            }}
                            className="block w-full px-4 py-2 text-left text-gray-700 hover:bg-gray-100"
                          >
                            Sign Out
                          </button>
                          <button
                            onClick={() => {
                              window.location.href = "/account";
                            }}
                            className="block w-full px-4 py-2 text-left text-gray-700 hover:bg-gray-100"
                          >
                            Account
                          </button>
                        </div>
                      )}
                    </div>
                  ) : (
                    // Sign-Up Button
                    <a
                      href="/login"
                      className="bg-[#ff7f50] text-white px-4 py-2 rounded hover:bg-[#FF9067] flex items-center gap-2"
                    >
                      Sign Up
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
                    </a>
                  )}
                </li>
              </ul>
            )}
          </nav>
        </div>
      </section>
    </>
  );
}
