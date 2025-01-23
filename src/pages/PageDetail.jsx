import { useParams } from "react-router-dom"; // Import useParams from react-router-dom
import { useEffect, useState } from "react";
import { BASE_URL } from "../services/api"; // Ensure the correct API URL

export default function DetailedCardProduct() {
  const { id } = useParams(); // Get the ID from the URL
  const [blog, setBlog] = useState(null);

  useEffect(() => {
    const fetchBlogDetails = async () => {
      try {
        const response = await fetch(`${BASE_URL}/blogs/${id}`);
        const result = await response.json();
        setBlog(result);
      } catch (error) {
        console.error("Error fetching blog details:", error);
      }
    };

    fetchBlogDetails();
  }, [id]); // Trigger the fetch whenever the ID changes

  if (!blog)
    return (
      <div className="flex justify-center items-center h-screen text-gray-600 dark:text-gray-300">
        Loading...
      </div>
    ); // Show loading while fetching data

  return (
    <div className="min-h-screen bg-gray-100 dark:bg-gray-900 text-gray-900 dark:text-gray-100 py-5">
      <div className="max-w-2xl mx-auto p-6 bg-white dark:bg-gray-800 rounded-lg shadow-xl">
        {/* Blog Title */}
        <h1 className="text-3xl font-extrabold text-gray-900 dark:text-gray-100">
          {blog.title}
        </h1>

        {/* Blog Author and Date */}
        <div className="flex items-center mt-4">
          <img
            src={
              blog.author?.profileImage ||
              "https://img.freepik.com/premium-vector/default-avatar-profile-icon-social-media-user-image-gray-avatar-icon-blank-profile-silhouette-vector-illustration_561158-3407.jpg?w=360"
            }
            alt={blog.author?.username || "Author"}
            className="w-10 h-10 rounded-full mr-4"
          />
          <div>
            <p className="text-lg font-medium text-gray-800 dark:text-gray-300">
              {blog.author?.username || "Unknown Author"}
            </p>
            <p className="text-sm text-gray-500 dark:text-gray-400">
              {new Date(blog.created_at).toLocaleDateString()}
            </p>
          </div>
        </div>

        {/* Blog Image */}
        <div className="mt-6">
          <img
            src={
              blog.thumbnail ||
              "https://images.unsplash.com/photo-1628202926206-c63a34b1618f?q=80&w=2574&auto=format&fit=crop"
            }
            alt={blog.title}
            className="w-full h-auto object-cover rounded-lg shadow-md"
          />
        </div>

        {/* Blog Content */}
        <div className="mt-8 text-lg leading-relaxed ">
          <p className="text-4xl font-bold">{blog.title}</p>
          <p>{blog.content}</p>
        </div>

        {/* Categories */}
        <div className="flex flex-wrap gap-2 mt-6">
          {blog.categories?.map((category) => (
            <span
              key={category.name}
              className="inline-block bg-blue-100 dark:bg-blue-700 text-blue-600 dark:text-blue-200 px-3 py-1 rounded-full text-sm font-semibold"
            >
              #{category.name}
            </span>
          ))}
        </div>

        {/* Back Button */}
        <div className="mt-8">
          <a
            href="/"
            className="inline-block text-blue-600 hover:text-blue-800 dark:text-blue-400 dark:hover:text-blue-600 font-medium text-lg"
          >
            &larr; Back to all blogs
          </a>
        </div>
      </div>
    </div>
  );
}
