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
    return <div className="text-center text-gray-600">Loading...</div>;
  }

  if (error) {
    return (
      <div className="text-center text-red-600 font-bold">Error: {error}</div>
    );
  }

  return (
    <div className="flex flex-wrap justify-center gap-6 p-6">
      {data.map((item) => (
        <div
          key={item.id}
          className="w-80 bg-white rounded-lg shadow-lg p-6 hover:shadow-xl transition-shadow transform hover:-translate-y-2"
        >
          {/* Header with profile image and username */}
          <div className="flex items-center mb-4">
            <img
              src={item.author.profileImage || "/default-profile.png"}
              alt={item.author.username}
              className="w-12 h-12 rounded-full mr-3"
            />
            <div>
              <span className="text-sm font-semibold text-gray-800">
                {item.author.username}
              </span>
              <p className="text-xs text-gray-500">Author</p>
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
          <div className="text-sm text-blue-500 mb-4">
            {item.categories.map((category) => (
              <span
                key={category.name}
                className="inline-block bg-blue-100 text-blue-600 px-2 py-1 rounded-full mr-2"
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
            <div className="space-x-2">
              <button className="bg-blue-500 text-white text-sm px-3 py-1 rounded-lg hover:bg-blue-600">
                Read More
              </button>
              <button className="bg-gray-200 text-sm px-3 py-1 rounded-lg hover:bg-gray-300">
                Edit
              </button>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default DataFetchingComponent;
