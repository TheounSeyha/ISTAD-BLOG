import { useState, useEffect, useRef } from "react";

// eslint-disable-next-line react/prop-types
const Card = ({ avatar, title, content, tags, likes, comments, image }) => {
  const [isDropdownOpen, setDropdownOpen] = useState(false);
  const dropdownRef = useRef(null);

  const toggleDropdown = () => {
    setDropdownOpen((prev) => !prev);
  };

  const handleClickOutside = (event) => {
    if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
      setDropdownOpen(false);
    }
  };

  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <div className="max-w-sm rounded-lg overflow-hidden shadow-md bg-white border border-gray-200 relative">
      <img className="w-full h-48 object-cover" src={image} alt={title} />
      <div className="px-5 py-4">
        <div className="flex items-center mb-4">
          <img
            className="w-12 h-12 rounded-full mr-4"
            src={avatar}
            alt="Avatar"
          />
          <div>
            <p className="text-gray-900 font-semibold">{title}</p>
            <p className="text-gray-500 text-sm">William JB.</p>
          </div>
          {/* Three-dot button */}
          <button
            onClick={toggleDropdown}
            className="ml-auto -mt-12 text-red-500 text-[2rem]"
          >
            &#x2026;
          </button>
        </div>
        {isDropdownOpen && (
          <div
            ref={dropdownRef}
            className="absolute right-3 -mt-8 bg-white shadow-lg rounded-lg border border-gray-200 z-50"
          >
            <ul className="text-sm text-gray-700">
              <li className="px-4 py-2 hover:bg-gray-100 cursor-pointer">
                Edit
              </li>
              <li className="px-4 py-2 hover:bg-gray-100 cursor-pointer">
                Delete
              </li>
            </ul>
          </div>
        )}
        <p className="text-gray-700 text-sm mb-4">{content}</p>
        <div className="flex flex-wrap gap-2">
          {tags.map((tag, index) => (
            <span
              key={index}
              className="text-xs inline-block bg-blue-50 text-blue-700 font-medium px-3 py-1 rounded-full"
            >
              #{tag}
            </span>
          ))}
        </div>
      </div>
      <div className="px-5 py-3 border-t flex justify-between items-center">
        <div className="flex items-center space-x-2">
          <span className="text-red-500 text-lg">❤️</span>
          <span className="text-gray-600 text-sm">{likes}</span>
        </div>
        <div className="flex items-center space-x-2">
          <span className="text-blue-500 text-lg">💬</span>
          <span className="text-gray-600 text-sm">{comments}</span>
        </div>
        <button className="ml-auto bg-blue-500 text-white text-sm font-medium px-4 py-2 rounded-lg hover:bg-blue-600">
          Read More
        </button>
      </div>
    </div>
  );
};

export default Card;
