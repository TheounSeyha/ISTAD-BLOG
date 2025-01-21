import { useState, useEffect } from "react";

const DataFetchingComponent = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(`https://blog-api.devnerd.store/blogs`);
        if (!response.ok) {
          throw new Error("Failed to fetch data");
        }
        const result = await response.json();
        if (Array.isArray(result.blogs)) {
          setData(result.blogs);
        } else {
          setError("Data is not in expected array format");
        }
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  if (loading) {
    return (
      <div className="flex items-center justify-center h-screen text-gray-600 text-lg">
        Loading...
      </div>
    );
  }

  if (error) {
    return (
      <div className="flex items-center justify-center h-screen text-red-600 font-bold text-lg">
        Error: {error}
      </div>
    );
  }

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 p-6">
      {data.map((item) => (
        <div
          key={item.id}
          className="rounded-lg shadow-md p-4 hover:shadow-lg transition-transform transform hover:scale-105 border border-gray-200 "
        >
          {/* Header with profile image and username */}
          <div className="flex items-center mb-4 ">
            <img
              src={item.author.profileImage || "/image/user.png"}
              alt={item.author.username}
              className="w-12 h-12 rounded-full mr-4"
            />
            <div>
              <span className="text-sm font-semibold text-gray-800 px-4">
                {item.author.username}
              </span>
              
            </div>
          </div>

          {/* Blog Title */}
          <h2 className="text-lg font-bold text-gray-900 mb-2 truncate">
            {item.title}
          </h2>

          {/* Blog Content */}
          <p className="text-sm text-gray-700 mb-4 line-clamp-3">
            {item.content}
          </p>

          {/* Hashtags */}
          <div className="flex flex-wrap gap-2 text-sm text-blue-500 mb-4">
            {item.categories.map((category) => (
              <span
                key={category.name}
                className="inline-block bg-blue-100 text-blue-600 px-2 py-1 rounded-full"
              >
                #{category.name}
              </span>
            ))}
          </div>

          {/* Footer with buttons */}
          <div className="flex justify-between items-center">
            {/* Likes and Comments */}
            <div className="flex space-x-4 text-sm text-gray-600">
              <div className="flex items-center space-x-1">
                <span className="text-red-500">❤️</span>
                <span>{Math.floor(Math.random() * 5000)}</span>
              </div>
              <div className="flex items-center space-x-1">
                <span className="text-gray-500">💬</span>
                <span>{Math.floor(Math.random() * 500)}</span>
              </div>
            </div>

            {/* Buttons */}
            <div>
              <button className="bg-blue-500  text-blue-400 text-sm px-6 py-2 rounded-lg shadow-md transition-all duration-300 transform hover:scale-110 hover:shadow-lg hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-400 font-bold">
                Read More
              </button>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default DataFetchingComponent;
